import React from "react"
import { shallow } from "enzyme"

import { findByTestAttr } from "./test/utils"
import { GuessedWords } from "./GuessedWords";

const defaultProps ={
  guessedWords: [{ guessedWord: 'train', lettrMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, props };
  return shallow(<GuessedWords {...setupProps} />)
}

describe('テキストなし', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: {} })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-word')
    expect(component.length).toBe(1)
  })
  // test('renders instructions to guess a word', () => {
  //   const instructions = findByTestAttr(wrapper, 'guess-instructions')
  //   expect(instructions.text().length).not.toBe(0)
  // })
})

describe('テキストがあった場合', () => {
  let wrapper
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })
  
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-word')
    expect(component.length).toBe(1)
  })
  test('renders guessed words section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })
  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsNodes.length).toBe(GuessedWords.length)
  })
})