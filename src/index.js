import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// Costum page react
import HeaderComponent from './views/components/HeaderBodyComponent';
import HomePage from './views/pages/HomePage';
// import ExperiancePage from './views/pages/ExperiancePage';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HeaderComponent />
    <HomePage id="home"/>
    {/* <ExperiancePage /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
