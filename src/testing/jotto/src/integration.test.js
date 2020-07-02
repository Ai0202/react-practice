import { storeFactory } from './test/utils'
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessWord: unsuccessfulGuess,
          letterMatchCount: 3,
        }]
      }
      expectedState(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessWord: secretWord,
          letterMatchCount: 5,
        }]
      }
      expectedState(newState).toEqual(expectedState);
    });
  });
  describe('some guessed words', () => {
    const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord }
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessWords: [...guessedWords, { guessWord: unsuccessfulGuess, letterMatchCount: 3 }]
      }
      expectedState(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessWords: [...guessedWords, 
          { guessWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expectedState(newState).toEqual(expectedState);
    });
  });
  
})