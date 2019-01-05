import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import TodoList from '../components/TodoList';


class App extends Component {

  render () {
    return (
      <div>
                  <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
})

export default connect(mapStateToProps, { fetchTodos })(App)
