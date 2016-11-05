// Polyfill fetch
import 'whatwg-fetch';

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore';

const initialState = { count: 0 };

const reducer = async (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store);

async function k() {
  return 'hello';
}

console.log(k());

class App extends Component {
  render() {
    return (
      <div className="app">
        Hello
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};

ReactDOM.render((
  <App />
), document.getElementById('mimir'));

