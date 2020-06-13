import  * as types from "../constants/ActionTypes"

let nextMessageId = 0;
let nextUserId = 0;

export type AddMessage = {
  type: typeof types.ADD_MESSAGE;
  payload: {
    data: {
      message: string;
      author: string;
    }
  }
  id: number;
}

type AddUser = {
  type: typeof types.ADD_USER;
  payload: {
    data: {
      id: number;
      name: string;
    }
  }
}

type MessageRecived = {
  type: typeof types.MESSAGE_RECIVED;
  payload: {
    data : {
      message: string,
      author: string,
    }
  }
  id: number,
}

type PopulateUserList = {
  type: typeof types.USERS_LIST;
  users: any[];
}

export type Action = 
| AddMessage
| AddUser
| MessageRecived
| PopulateUserList

export const addMessage = (payload: {
  data: { message: string, author: string }
}): AddMessage => {
  return {
    type: types.ADD_MESSAGE,
    payload,
    id: nextMessageId++,
  }
}

export const messageRecived = (payload: { data: { message: string, author: string } }): MessageRecived => ({
  type: types.MESSAGE_RECIVED,
  payload,
  id: nextMessageId++,
})

export const addUser = (name: string): AddUser => ({
  type: types.ADD_USER,
  payload: {
    data: {
      id: nextUserId++,
      name
    }
  }
})

export const populateUserList = (users: any[]): PopulateUserList => ({
  type: types.USERS_LIST,
  users
})