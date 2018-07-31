/*
 * action types
 */
​
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BY_CUISINE: 'SHOW_BY_CUISINE',
  SHOW_HAS_TEN_BIS: 'SHOW_HAS_TEN_BIS'
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})