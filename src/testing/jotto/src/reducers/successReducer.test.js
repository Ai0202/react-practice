import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default initial state of false when no action', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
})

test('state fo true upon receiving an action of type correct_guess', () => {
  const newState = successReducer(undefined, { type:actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
})