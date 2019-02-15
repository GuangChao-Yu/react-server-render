import {CHANGE_LIST} from './contains'

const defaultState = {
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      }
    default:
      return state
  }
}
