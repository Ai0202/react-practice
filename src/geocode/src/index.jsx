import React from 'react';
import ReactDOM from 'react-dom';
// applyMiddlewareはmiddlewareを使いたいときに使う
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// 親で定義したstoreをすべての子で使用できるようにする
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import reducer from './reducers/';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
