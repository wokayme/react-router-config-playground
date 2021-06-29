import React from 'react';
import logo from './react.svg';
import './Home.css';
import {moduleName} from "@inside/aboutus"
const fetch = require('node-fetch');

class SomeDiffPage extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to SomeDiffPage</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

SomeDiffPage.preload = async () => {
  return fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').then(res=>res.json()).then(res=>{
    console.log(res)
  })
}

export default SomeDiffPage;
