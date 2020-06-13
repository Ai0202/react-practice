import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { AddMessage } from "../actions";

type Params = {
  socket: WebSocket;
  username: string
}

export const handleNewMessage = function* handleNewMessage(params: Params) {
  yield takeEvery(types.ADD_MESSAGE, (action: any) => {
    // TODO 要改善
    action.author = params.username
    action.message = action.payload.data.message
    params.socket.send(JSON.stringify(action))
  })
}