'use strict';

/* global require console process */

const gulp = require('gulp');
const fs = require('fs');
const sass = require('gulp-sass');
const webpack = require('webpack');
const getWebpackConfig = require('./webpack.config.js');

const del = require('del');
const concat = require('gulp-concat');
const template = require('gulp-template');
const rev = require('gulp-rev');
const util = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');

// let eslint = require('eslint');
// let eslintrc = require('./.eslintrc');

// let spawn = require('child_process').spawn;
// let electron = require('electron-prebuilt');
// let packager = require('electron-packager');

const isProd = () => process.env.NODE_ENV === 'production';
const isDev = () => process.env.NODE_ENV === 'development';
const isTest = () => process.env.NODE_ENV === 'test';


function getOutputDir() {
  if (isTest()) {
    return './test-dist';
  }
  else if (isProd()) {
    return `./production`;
  }
  else if (isDev()) {
    return `./dist`;
  }
  else {
    throw new Error(`Invalid environment ${process.env.NODE_ENV}`);
  }
}

const outputDir = getOutputDir();
const inputDir = './src';

const webpackConfig = getWebpackConfig({ outputDir });

const config = {
  indexHtmlSrc: `${inputDir}/index.html`,
  indexHtmlDist: `${outputDir}/`,

  entryFileDist: `${outputDir}/app.js`,
  
  // electronSrc: `${inputDir}/main.js`,
  // electronDist: `${outputDir}/`,

  styleSrc: `${inputDir}/assets/styles/app.scss`,
  stylesSrc: `${inputDir}/assets/styles/**/*.scss`,
  styleDist: `${outputDir}/assets/styles`,
  appCssManifest: `${outputDir}/assets/styles/rev-manifest.json`,

  publicSrc: [`${inputDir}/public/**/*`],
  publicDist: `${outputDir}/`,

  fontsSrc: [
    `${inputDir}/assets/fonts/**/*`
  ],
  fontsDist: `${outputDir}/assets/fonts`,

  libsOutputDir: `${outputDir}/libs/`,
  libsOutput: 'libs.js',
  libsManifest: `${outputDir}/libs/rev-manifest.json`,
  individualLibsManifest: `${outputDir}/libs/individual-libs-manifest.json`,
  delFiles: [`${outputDir}/**/*`],
  devLibs: [
    // Polyfills
    `${inputDir}/libs/Array.prototype.find.js`,
    `${inputDir}/libs/Object.assign.js`,
    `${inputDir}/libs/String.prototype.startsWith.js`,
    `./node_modules/es6-promise/dist/es6-promise.js`,

    // Libraries
    './node_modules/moment/moment.js',
    `./node_modules/flatpickr/dist/flatpickr.min.js`,
    `${inputDir}/libs/intercom.32fa30c6.js`
  ],
  prodLibs: [
    // Polyfills
    `${inputDir}/libs/Array.prototype.find.min.js`,
    `${inputDir}/libs/Object.assign.min.js`,
    `${inputDir}/libs/String.prototype.startsWith.min.js`,
    `./node_modules/es6-promise/dist/es6-promise.min.js`,

    // Libraries
    './node_modules/moment/min/moment.min.js',
    `./node_modules/flatpickr/dist/flatpickr.min.js`,
    `${inputDir}/libs/intercom.32fa30c6.js`
  ],

  individualLibs: [
    './node_modules/ace-builds/src-min-noconflict/ace.js',
    './node_modules/ace-builds/src-min-noconflict/ext-modelist.js'
  ],

  sassPaths: [
    './node_modules/flatpickr/dist/',
    './node_modules/chartist/dist/scss/'
  ],
  devAceSrc: [
    './node_modules/ace-builds/src-noconflict/mode-*.js',
    './node_modules/ace-builds/src-noconflict/theme-monokai.js',
    './node_modules/ace-builds/src-noconflict/theme-vibrant_ink.js'
  ],
  prodAceSrc: [

    './node_modules/ace-builds/src-min-noconflict/mode-*.js',
    './node_modules/ace-builds/src-min-noconflict/theme-monokai.js',
    './node_modules/ace-builds/src-min-noconflict/theme-vibrant_ink.js'
  ],
  aceDist: `${outputDir}/libs`,
  eslintOut: './eslint.out.json',

  importPaths: [
    './src/app'
  ],

  autoprefixerOptions: {
    browsers: ['IE 10'] 
  }
};

function gulpIf(condition, callback) {
  return condition ? callback : util.noop();
}
// clean the output directory
gulp.task('clean-html', function cleanHtml() {
  return del(config.htmlDist);
});
gulp.task('clean-index', function cleanIndex() {
  return del(config.indexHtmlDist);
});
gulp.task('clean-js', function cleanJs() {
  return del(config.entryFileDist);
});
gulp.task('clean-styles', function cleanStyles() {
  return del(config.styleDist);
});

gulp.task('clean', function clean() {
  return del(config.delFiles);
});

// gulp.task('clean', ['clean-html', 'clean-index', 'clean-js', 'clean-styles']/*, function(cb){
//   // return del([config.delFiles, '!' + config.htmlDist, '!' + config.entryFileDist, '!' + config.styleDist]);
//   return true;
// }*/);

gulp.task('clean-assets', function cleanAssets() {
  return del(config.publicDist);
});

gulp.task('copy-public', ['clean-assets'], function copyPublic() {
  return gulp.src(config.publicSrc)
  .pipe(gulp.dest(config.publicDist));
});

gulp.task('copy-fonts', ['clean-assets'], function copyFonts() {
  return gulp.src(config.fontsSrc)
  .pipe(gulp.dest(config.fontsDist));
});

gulp.task('copy-assets', ['clean-assets', 'copy-public', 'copy-fonts']);

gulp.task('clean-libs', function cleanLibs() {
  return del(config.libsOutputDir);
});

gulp.task('copy-ace', ['clean-libs'], function copyModes() {
  return gulp.src(isProd() ? config.prodAceSrc : config.devAceSrc)
  .pipe(gulp.dest(config.aceDist));
});

gulp.task('copy-libs', ['clean-libs'], function copyDevLibs() {
  return gulp.src(isProd() ? config.prodLibs : config.devLibs)
  .pipe(concat(config.libsOutput))
  .pipe(gulpIf(isProd(), rev()))
  .pipe(gulpIf(isProd(), gulp.dest(config.libsOutputDir)))
  .pipe(gulpIf(isProd(), rev.manifest({ path: 'rev-manifest.json' })))
  .pipe(gulp.dest(config.libsOutputDir));
});

gulp.task('copy-individual-libs', ['clean-libs'], function copyIndividualLibs() {
  return gulp.src(config.individualLibs)
  .pipe(gulpIf(isProd(), rev()))
  .pipe(gulpIf(isProd(), gulp.dest(config.libsOutputDir)))
  .pipe(gulpIf(isProd(), rev.manifest({ path: 'individual-libs-manifest.json' })))
  .pipe(gulp.dest(config.libsOutputDir));
});

gulp.task('build-sass', ['clean-styles'], function buildSass() {
  return gulp.src(config.styleSrc)
    .pipe(sass({
      outputStyle: isProd() ? 'compressed' : 'expanded',
      includePaths: config.sassPaths
    }).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(gulpIf(isProd(), rev()))
    .pipe(gulpIf(isProd(), gulp.dest(config.styleDist)))
    .pipe(gulpIf(isProd(), rev.manifest({ path: 'rev-manifest.json' })))
    .pipe(gulp.dest(config.styleDist));
});

const compiler = webpack(webpackConfig);
const webPackHashPromise = new Promise((resolve) => {
  gulp.task('build-js', ['clean-js'], function buildJs(done) {
    return compiler.run(function onPack(err, stats) {
      if (err) {
        throw err;
      }
      else if (stats.compilation.errors.length === 0) {
        resolve(stats.hash);
        console.log('Build success!');
      }
      else {
        console.log('Build failed! Details: ');
        console.log(stats.compilation.errors.map((error) => error.toString()).join('\n'));
      }
      done();
    });
  });
});

gulp.task('watch-js', ['clean-js', 'build-js'], function watchJs() {
  compiler.watch({
    aggregateTimeout: 20
  }, function onBuildCompleted(err, stats) {
    if (err) {
      throw err;
    }
    else if (stats.compilation.errors.length === 0) {
      console.log('Build success!');
    }
    else {
      console.log('Build failed! Details: ');
      console.log(stats.compilation.errors.map((error) => error.toString()).join('\n'));
    }
  });
});

// let socketUrl = 'wss://devrata2.mimir.technology:4080';
// let appUrl = 'http://localhost:3000';
// let stripePublicKey = 'pk_test_4Xfba6hh0jYK6nfLa5wN90fH';

// if (util.env.api === 'dev') {
//   appUrl = 'https://dev.mimir.technology';
//   socketUrl = 'wss://devrata2.mimir.technology:4080';
// }
// else if (util.env.api === 'prod') {
//   appUrl = 'https://app.mimirplatform.io';
//   socketUrl = 'wss://rata2.mimir.technology:4080';
//   stripePublicKey = 'pk_live_Ejrljxi5NlRkVlqIujFM3vkX';
// }

// if (util.env['local-socket']) {
//   socketUrl = 'ws://localhost:4080';
// }

const getFileNames = (prefix, webPackHash) => {
  if (isProd()) {
    const libsManifest = JSON.parse(fs.readFileSync(config.libsManifest, 'utf8'));
    const appCssManifest = JSON.parse(fs.readFileSync(config.appCssManifest, 'utf8'));
    
    return {
      libsName: `${prefix}libs/${libsManifest['libs.js']}`,
      appJsName: `${prefix}app-${webPackHash}.js`,
      commonJsName: `${prefix}common-${webPackHash}.js`,
      appCssName: `${prefix}assets/styles/${appCssManifest['app.css']}`
    };
  }
  else {
    return {
      libsName: `${prefix}libs/libs.js`,
      appJsName: `${prefix}app.js`,
      commonJsName: `${prefix}common.js`,
      appCssName: `${prefix}assets/styles/app.css`
    };
  }
};

gulp.task('copy-index', ['copy-libs', 'copy-individual-libs', 'build-sass', 'build-js', 'clean-index'], function copyDevIndex() {
  webPackHashPromise.then((webPackHash) => {
    const prefix = util.env.electron ? './' : '/';
    const { libsName, appJsName, commonJsName, appCssName } = getFileNames(prefix, webPackHash);

    gulp.src(config.indexHtmlSrc)
    .pipe(template({
      libsName: libsName,
      appJsName: appJsName,
      commonJsName: commonJsName,
      appCssName: appCssName
    }))
    .pipe(gulp.dest(config.indexHtmlDist));
  });
});

gulp.task('watch-index', function watchIndex() {
  gulp.watch(config.indexHtmlSrc, ['build']);
});

gulp.task('watch-styles', function watchStyles() {
  gulp.watch(config.stylesSrc, ['build-sass']);
});

gulp.task('build-no-clean', ['copy-assets', 'copy-libs', 'copy-individual-libs', 'copy-ace', 'build-sass', 'build-js', 'copy-index']);
gulp.task('build', ['clean'], function build() {
  return gulp.start('build-no-clean');
});

gulp.task('watch-files', ['build', /* 'watch-index', */ 'watch-styles', 'watch-js']);
gulp.task('default', ['watch-files']);

// gulp.task('copy-electron', ['clean'], function copyElectron() {
//   return gulp.src(config.electronSrc)
//   .pipe(gulp.dest(config.electronDist));
// });

// gulp.task('build-electron', ['clean', 'copy-electron', 'build'], function buildElectron() {
  
// });

// gulp.task('run-electron', ['build', 'copy-electron'], function runElectronDev() {
//   if (!util.env.electron) {
//     console.error("Electron builds must be run with '--electron'!");
//     return false;
//   }
//   return spawn(electron, ['.']);
// });
//
// gulp.task('build-electron', ['build', 'copy-electron'], function buildElectron() {
//   if (!util.env.electron) {
//     console.error("Electron builds must be run with '--electron'!");
//     return false;
//   }
//   return packager({
//     name: 'mimir',
//     dir: './',
//     arch: util.env.arch || 'x64',
//     platform: util.env.platform || 'linux',
//     version: '0.36.8',
//     out: './builds/',
//     overwrite: true
//   });
// });
