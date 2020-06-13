import * as types from '../constants/ActionTypes'
import { Action } from "../actions";

// export type State = {

// }

export const messages = (state: any[] = [], action: any) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECIVED:
      console.log(action)
      const {
        payload: {
          data: { message, author }
        }
      } = action;
      return state.concat([
        {
          message,
          author,
          id: action.id
        }
      ])
    default:
      return state
  }
}