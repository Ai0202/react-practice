import * as types from '../constants/ActionTypes'

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
      return state.concat([
        {
          name: action.name,
          id: action.id
        }
      ])
    case types.USERS_LIST:
      return action.users 
    default:
      return state
  }
}