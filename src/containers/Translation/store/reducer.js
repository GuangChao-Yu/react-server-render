import {CHANGE_LIST} from './contains'

const defaultState = {
  translationList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}
