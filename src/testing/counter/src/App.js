import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // id や class属性が存在するかテストで判断可能だが、
      // 変更される可能性があるため、
      // test確認用の属性を付与してる
      <div data-test="component-app">
        <h1>App</h1>
      </div>
    )
  }
}

export default App;
