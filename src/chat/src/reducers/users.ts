import * as types from '../constants/ActionTypes'
import { Action } from "../actions";

type State = {
  user: string;
  id: number;
}

const initialState = [
  {
    name: '',
    id: '',
  }
]

export const users = (state: any[] = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_USER:
      console.log(action);
      return state.concat([
        {
          name: action.name,
          id: action.id
        }
      ])
      // const { data: { id, name} } = action.payload;
      // return {
      //   ...state,
      //   id,
      //   name
      // }
    case types.USERS_LIST:
      return action.users 
    default:
      return state
  }
}