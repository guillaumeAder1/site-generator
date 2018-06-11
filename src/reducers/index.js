import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Counter from './counter'

const rootReducer = combineReducers({
  routing: routerReducer,
  Counter

})

export default rootReducer
