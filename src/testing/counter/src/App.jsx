import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  decrementCounter = ()  => {

    if (this.state.counter <= 0) {
      document.querySelector('.error-display').textContent = 'エラーです';
    } else {
      this.setState({ counter: this.state.counter - 1 })
    }

  }

  render() {
    return (
      // id や class属性が存在するかテストで判断可能だが、
      // 変更される可能性があるため、
      // test確認用の属性を付与してる
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The coutner is currently { this.state.counter }
        </h1>
        <div className="error-display" data-test="error-display"></div>
        <button 
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment Counter
        </button>
        <button 
          data-test="decrement-button"
          onClick={() => this.decrementCounter()}
        >
          Decrement Counter
        </button>
      </div>
    )
  }
}

export default App;
