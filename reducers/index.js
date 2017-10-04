import { combineReducers } from 'redux'
import navigation from './navigation'
import tilbod from './tilbod'
const rootReducer = combineReducers({
  navigation,
  tilbod
})

export default rootReducer
