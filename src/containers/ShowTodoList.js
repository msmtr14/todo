import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { ShowFilters } from '../actions'

const getShowTodos = (todos, filter) => {
  switch (filter) {
    case ShowFilters.SHOW_ALL:
      return todos
    case ShowFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case ShowFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getShowTodos(state.todos, state.showFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
