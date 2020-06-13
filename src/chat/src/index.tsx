import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from './reducers';
import { handleNewMessage } from "./sagas";
import { username } from "./utils/name";

import { setUpSocket } from "./sockets";
import { Action } from "./actions";

const SagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(SagaMiddleware)
);

const socket = setUpSocket(store.dispatch, username)

SagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
