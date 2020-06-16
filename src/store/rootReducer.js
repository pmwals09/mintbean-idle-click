import { combineReducers } from 'redux'

import { resources } from '../modules/resources'
import { factories } from '../modules/factories'
import { money } from '../modules/money'

const rootReducer = combineReducers({
  resources,
  factories,
  money
})

export default rootReducer
