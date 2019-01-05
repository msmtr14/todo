import axios from 'axios'

export const FETCH_TODOS = 'fetch_todos'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = (todos) => {
  const request = axios.get(`${API_URL}`)
    .catch(err => { return err.message })
  return {
    type: FETCH_TODOS,
    payload: request
  }
}
