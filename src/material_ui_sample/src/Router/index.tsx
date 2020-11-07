import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Message } from '../components/Message';
import { MessageList } from '../components/MessageList';
import { Sample3 } from '../components/Sample3';
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { Ticket } from '../components/Ticket';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/ticket" component={Ticket} />
      <Route exact path="/mypage" component={Sample3} />
      <Route exact path="/menter/message" component={MessageList} />
      <Route exact path="/menter/:id/message" component={Message} />
    </Switch>
  )
}