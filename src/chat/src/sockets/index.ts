import * as types from "../constants/ActionTypes";
import { addUser, messageRecived, populateUserList } from "../actions";
import { Dispatch } from "redux";

export const setUpSocket = (dispatch: Dispatch, username: string) => {
  const socket = new WebSocket('ws://localhost:8989')
  
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }

  socket.onmessage = event => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageRecived({ data: { message: data.message, author: data.author } }))
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break;
      case types.USERS_LIST:
        dispatch(populateUserList(data.users))
        break;
      default:
        break;
    }
  }

  return socket;
}

