import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Redux component which stores states.
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  // Provider takes state changes and sends down into containers/components.
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
