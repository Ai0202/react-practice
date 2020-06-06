import React from "react";

type Props = {
  submit: Function
}

export const AddMessage: React.FC<Props> = props => {
  let input: any

  return (
    <section id="new-message">
      <input
       onKeyPress={(e) => {
         if (e.key === "Enter") {
           props.submit(input.value, '私')
           input.value = ''
         }
       }}
       type="text"
       ref={(node) => {
         input = node
       }}
      />
    </section>
  )
}