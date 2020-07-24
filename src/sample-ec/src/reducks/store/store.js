import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { LoadingReducer } from '../loading/reducers'
import { UsersReducer } from '../users/reducers'
import { ProductsReducer } from '../products/reducers'

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {
  let middleWares = [routerMiddleware(history), thunk];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true
    });
    middleWares.push(logger)
  }

  return reduxCreateStore( // オリジナル createStore の別名
    combineReducers({
      loading: LoadingReducer,
      users: UsersReducer,
      products: ProductsReducer,
      router: connectRouter(history),
    }),
    applyMiddleware(...middleWares)  
  )
}