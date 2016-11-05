// Polyfill fetch
import 'whatwg-fetch';

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore';

const initialState = { count: 0 };

const reducer = async (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'DELAY_INCREMENT':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ...state, count: state.count + 1 });
        }, 1000);
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = reducer();
    store.subscribe(() => this.setState(store.getState()));
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delayIncrement = this.delayIncrement.bind(this);
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

  delayIncrement() {
    store.dispatch({ type: 'DELAY_INCREMENT' });
  }

  render() {
    return (
      <div className="app">
        <p>{ this.state.count }</p>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.decrement }>-</button>
        <button onClick={ this.delayIncrement }>Delay +</button>
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

