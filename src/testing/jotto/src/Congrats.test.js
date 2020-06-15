import React from "react"
import { shallow } from "enzyme"

import { findByTestAttr } from "./test/utils"
import { Congrats } from "./Congrats"


const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no test when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty message wehn `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})