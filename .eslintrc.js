module.exports = {
  "env": {                           // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    "browser": true,                 // browser global variables
    "es6": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "flowtype",
    "immutable"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  extends: ["plugin:react/recommended"],
  "rules": {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 0,
    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 2,
    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [2, 11],
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': [2, 'multi-line'],
    // require default case in switch statements
    'default-case': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': [2, { 'allowKeywords': true }],
    // enforces consistent newlines before or after dots
    'dot-location': [2, "property"],
    // require the use of === and !==
    'eqeqeq': 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 2,
    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow else after a return in an if
    'no-else-return': 0,
    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 2,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labels for anything other then loops and switches
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [2, { props: true }],
    // disallow use of process.env
    'no-process-env': 0,
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 0,
    // disallow use of void operator
    'no-void': 2,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [1, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [2, 'outside'],
    // require or disallow Yoda conditions
    'yoda': [2, "never"],
    // disallow assignment in conditional expressions
    'no-cond-assign': [2, 'always'],
    // disallow use of constant expressions in conditions
    'no-constant-condition': 1,
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow use of debugger
    'no-debugger': 1,
    // disallow duplicate arguments in functions
    'no-dupe-args': 2,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 2,
    // disallow a duplicate case label.
    'no-duplicate-case': 2,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,
    // disallow empty statements
    'no-empty': 2,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 2,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 2,
    // disallow unnecessary parentheses
    'no-extra-parens': [2, 'functions'],
    // disallow unnecessary semicolons
    'no-extra-semi': 2,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 2,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 2,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 2,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,
    // disallow sparse arrays
    'no-sparse-arrays': 2,
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2,
    // disallow comparisons with the value NaN
    'use-isnan': 2,
    // ensure JSDoc comments are valid
    'valid-jsdoc': 0,
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 0,
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': 2,
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // require trailing commas in multiline object literals
    'comma-dangle': [2, 'always-multiline'],
    // verify super() callings in constructors
    'constructor-super': 2,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': [2, { after: true, before: true }],
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 0,
    // Prefer const when possible
    'prefer-const': 2,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 2,
    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 0,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 2,
    // require let or const instead of var
    'no-var': 2,
    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 2,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 2,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 2,
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 0,
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 2,
    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [2, 'after'],
    // disallow trailing commas in object literals
    'comma-dangle': [2, 'never'],
    // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 2,
    // babel inserts `'use strict';` for us
    'strict': [0, 'never'],
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce one true brace style
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, { 'properties': 'never' }],
    // enforce spacing before and after comma
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 0,
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 2,
    // enforces use of function declarations or expressions
    'func-style': [0, 'expression'],
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 0,
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': [2, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    // require a space before & after certain keywords
    'keyword-spacing': [2, {
      'before': true,
      'after': true,
      'overrides': {
      'return': { 'after': true },
      'throw': { 'after': true },
      'case': { 'after': true }
      }
    }],
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 2,
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': [2, 200, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // require a capital letter for constructors
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // allow/disallow an empty newline after var statement
    'newline-after-var': 0,
    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [0, { 'ignoreChainWithDepth': 3 }],
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 0,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1 }],
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 0,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 2,
    // require padding inside curly braces
    'object-curly-spacing': [2, 'always'],
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [2, 'always'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 2,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 0,
    // enforce padding within blocks
    'padded-blocks': [2, 'never'],
    // Always use single quotes unless double or backticks are more suited
    'quotes': [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': [2, 'as-needed', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce spacing before and after semicolons
    'semi-spacing': [2, { 'before': false, 'after': true }],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': [2, { 'anonymous': 'never', 'named': 'never' }],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!'] // space here to support sprockets directives
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,
    // enforce or disallow variable initializations at definition
    'init-declarations': 0,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 2,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 2,
    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 2,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // Disallow undeclared variables unless they are explicitly mentioned as in a global comment
    'no-undef': 2,
    // disallow use of undefined when initializing variables
    'no-undef-init': 2,
    // disallow use of undefined variable
    'no-undefined': 0,
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": [2, { "args": "after-used", "argsIgnorePattern": "^_" }],
    // disallow use of variables before they are defined
    'no-use-before-define': 2,

    // REACT/JSX

    // Require react to be declared to use JSX
    "react/react-in-jsx-scope": 2,
    // Force prop types
    "react/prop-types": 2,
    // Allow dangerouslySetInnerHTML
    "react/no-danger": 0,
    // Use <T>children</T> not <T children={ 'children' } />
    "react/no-children-prop": 2,
    // Prevent setting children and dangerouslysetInnerHTML
    "react/no-danger-with-children": 2,
    // No deprecated react methods
    "react/no-deprecated": 2,
    // Don't alter state object
    "react/no-direct-mutation-state": 2,
    // Dont use findDOMNode, deprecated
    "react/no-find-dom-node": 2,
    // Dont use isMounted, deprecated
    "react/no-is-mounted": 2,
    // One component per file
    "react/no-multi-comp": 2,
    // Use callbacks for ref instead of strings
    "react/no-string-refs": 2,
    // No unkown properties on dom elements
    "react/no-unknown-property": 2,
    // No unused proptypes, can't use this because we desctructure parameters
    "react/no-unused-prop-types": 0,
    // Don't use createClass
    "react/prefer-es6-class": 2,
    // Delicious stateless pure functional components
    "react/prefer-stateless-function": [2, { ignorePureComponents: true }],
    // Must return in render method
    "react/require-render-return": 2,
    // Style prop must be an object (not string)
    "react/style-prop-object": 2,
    // Require proper indentation for closing tag
    "react/jsx-closing-bracket-location": 2,
    // Require spacing in props k={ 'meme' }
    "react/jsx-curly-spacing": [2, "always"],
    // Props should never have spaces around equals signs
    "react/jsx-equals-spacing": [2, "never"],
    // Require keys in arrays and iterators
    "react/jsx-key": 2,
    // Prevent a shit ton of props on one line
    "react/jsx-max-props-per-line": [2, { "maximum": 5 }],
    // Don't use .bind() in render
    "react/jsx-no-bind": [2, { ignoreRefs: true }],
    // Enforce proper indentation of jsx props
    "react/jsx-indent": [2, 2],
    // Enforce proper indentation of jsx
    "react/jsx-indent-props": [2, 2],
    // Prevent normal JS comments from accidentally being used in JSX
    "react/jsx-no-comment-textnodes": 2,
    // Forces you to have rel="noopener noreferrer" with target="_blank"
    "react/jsx-no-target-blank": 2,
    // No undefined variables in JSX
    "react/jsx-no-undef": 2,
    // PascalCase
    "react/jsx-pascal-case": [2, { allowAllCaps: true }],
    // <Meme />
    "react/jsx-space-before-closing": [0, "always"],
    // return (
    //   <Meme />
    // );
    "react/jsx-wrap-multilines": 2,

    "immutable/no-let": 0,
    "immutable/no-this": 0,
    "immutable/no-mutation": 0,

    // FLOW

    // "flowtype/require-parameter-type": 1,
    // "flowtype/require-return-type": [
    //   1,
    //   "always",
    //   {
    //     annotateUndefined: "always"
    //   }
    // ],
    "flowtype/define-flow-type": 2,
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/type-id-match": [
      0,
      "^([A-Z][a-z0-9]+)+$"
    ]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
