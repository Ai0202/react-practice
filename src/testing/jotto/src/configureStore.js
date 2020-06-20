import { createStore } from 'redux'
import rootDeducer from './reducers'

export default createStore(rootDeducer)