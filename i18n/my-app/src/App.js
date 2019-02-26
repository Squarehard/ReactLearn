import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withTranslation } from "react-i18next";


class App extends Component {
  render() {

    const {t , i18n} = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{t("Welcome to React")}</h2>
          <h3>{t("teste.Coiso")}</h3>
          <h4>{t('girlsAndBoys', {count: 2, girls: 3})}</h4>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
    );
  }
}

export default withTranslation()(App);
