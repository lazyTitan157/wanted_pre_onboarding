import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navbar/index';
//import Slider from './components/Slider/index';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import './styles/index.css';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <Nav />
    </ThemeProvider>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();