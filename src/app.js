// Polyfill fetch
import 'whatwg-fetch';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="app">
    Hello
  </div>
);
App.propTypes = {
  children: PropTypes.element
};

ReactDOM.render((
  <App />
), document.getElementById('mimir'));

