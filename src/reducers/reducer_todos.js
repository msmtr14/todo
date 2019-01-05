
import { FETCH_TODOS } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload.data
    default:
      return state
  }
}
