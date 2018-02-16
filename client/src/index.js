import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

// Redux component which stores states.
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // Provider takes state changes and sends down into containers/components.
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

console.log('stripe key: ', process.env.REACT_APP_STRIPE_KEY);
console.log('env: ', process.env.NODE_ENV);
