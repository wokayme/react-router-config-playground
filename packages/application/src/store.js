import { createStore } from 'redux'

export function mainReducer(state = { data: null }, action) {
  switch (action.type) {
    case 'upload':
      return { data: action.data }
    default:
      return state
  }
}
