import React from 'react'
import { green } from 'ansi-colors';

const Todo = ({ onClick, completed, text }) => (
  <tr
    onClick={onClick}
    style={{
      color: completed ? 'green' : 'none'
    }}
  >
  <td>
    {text}
  </td>
  <tr>
    <button> Complete</button>
  </tr>
  </tr>
)



export default Todo
