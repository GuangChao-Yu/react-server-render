import {CHANGE_LOGIN} from './contains'
const defaultState = {
  login: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state
  }
}
