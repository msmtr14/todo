
import React from 'react'

const TodoList = ({ todos }) => (
<table>


  {
    (todos.map((todo,i) => (
    
<tr key={i}>
  <td>
    {todo.id}
  </td>
  <td>
    {todo.title}
  </td>
  <td>
    {todo.completed}
  </td>
</tr>
  )
  ))
}
  </table>
)

export default TodoList
