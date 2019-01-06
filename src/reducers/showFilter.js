import { ShowFilters } from '../actions'

const showFilter = (state = ShowFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_SHOW_FILTER':
      return action.filter
    default:
      return state
  }
}

export default showFilter
