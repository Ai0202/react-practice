import * as types from '../constants/ActionTypes'

export const messages = (state: any[] = [], action: any) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ])
    default:
      return state
  }
}