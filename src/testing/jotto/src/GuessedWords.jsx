import React from "react"
import PropsTypes from "prop-types"

export const GuessedWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!!
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))

    contents = (
      <div data-test="guessed-words" className="container">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-word">
      { contents }
    </div>
  )
}

GuessedWords.prototypes = {
  guessedWords: PropsTypes.arrayOf(
    PropsTypes.shape({
      guessedWord: PropsTypes.string.isRequired,
      lettrMatchCount: PropsTypes.number.isRequired,
    })
  ).isRequired
};
