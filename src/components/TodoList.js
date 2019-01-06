import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
 <table className="table table-bordered">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}

 </table>
)



export default TodoList
