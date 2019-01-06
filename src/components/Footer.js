import React from 'react'
import FilterLink from '../containers/FilterLink'
import { ShowFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={ShowFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={ShowFilters.SHOW_ACTIVE}>
      Non Completed
    </FilterLink>
    <FilterLink filter={ShowFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
