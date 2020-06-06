import React from "react";
import { messages } from "../reducers/messages";

import { Message } from "./Message";

type Props = {
  messages: any[],
}

export const MessageList: React.FC<Props> = props => {
  const { messages } = props

  return (
    <section id="message-list">
      <ul>
        {messages.map(message => (
          <Message key={message.id} {...message} />
        ))}
      </ul>
    </section>
  )
}