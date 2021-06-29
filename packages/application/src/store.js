import { createStore } from 'redux'

export function mainReducer(state = { data: null }, action) {
  switch (action.type) {
    case 'upload':
      return { data: action.data }
    default:
      return state
  }
}

export const clientStore = createStore(mainReducer, JSON.parse(window.REDUX_INIT_STATE));