import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

export const handleNewMessage = function* handleNewMessage(params: any) {
  yield takeEvery(types.ADD_MESSAGE, (action: any) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}