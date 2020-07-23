import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { connectRouter } from 'connected-react-router'

import { LoadingReducer } from '../loading/reducers';

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {
  return reduxCreateStore( // オリジナル createStore の別名
    combineReducers({
      loading: LoadingReducer,
      router: connectRouter(history),
    }),
    applyMiddleware()  
  )
}