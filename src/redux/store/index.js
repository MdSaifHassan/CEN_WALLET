import appReducer from '../reducer'
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

export const store = createStore(appReducer, applyMiddleware(Thunk))