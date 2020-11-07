import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Sample1 } from "./components/sample1";
import { Sample2 } from "./components/sample2";
import NavBar from "./components/NavBar/index";
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './materialui/theme';


ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <Header />
      <App />
      <Footer />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);