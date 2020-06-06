import React from "react";

type Props = {
  message: string,
  author: string,
}

export const Message: React.FC<Props> = props => {
  return (
    <li>
      {props.author}: {props.message}
    </li>
  )
}