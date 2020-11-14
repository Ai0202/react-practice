import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Message } from '../components/Message';
import { MessageList } from '../components/MessageList';
import { Sample3 } from '../components/Sample3';
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import { Ticket } from '../components/Ticket';
import { Privacy } from '../components/Privacy';
import { Terms } from '../components/Terms';
import { NotFound } from '../components/NotFound';
import { MenterList } from '../components/MenterList';
import { MenterDetail } from '../components/MenterDetail';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/ticket" component={Ticket} />
      <Route exact path="/mypage" component={Sample3} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/menters" component={MenterList} />
      <Route exact path="/menters/:id" component={MenterDetail} />
      <Route exact path="/menter/message" component={MessageList} />
      <Route exact path="/menter/:id/message" component={Message} />
      <Route component={NotFound} />
    </Switch>
  )
}