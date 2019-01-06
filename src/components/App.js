import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ShowTodoList from '../containers/ShowTodoList'

const App = () => (
  <div className="col-md-10">
    <div className="col-md-5">
      <AddTodo />
      <br />
      <br />
      <ShowTodoList />
    </div>
    <div>
    <Footer className="col-md-5" />
    </div>
  </div>
)

export default App
