import React from "react"

export const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">you got guess!!</span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
}