import  * as types from "../constants/ActionTypes"

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message: string, author: string) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = (name: string) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageRecived = (message: string, author: string) => ({
  type: types.MESSAGE_RECIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUserList = (users: any[]) => ({
  type: types.USERS_LIST,
  users
})