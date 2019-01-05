import { combineReducers } from 'redux'
import FetchTodos from './reducer_todos'

const rootReducer = combineReducers({
  todos: FetchTodos
})

export default rootReducer
