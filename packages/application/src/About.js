import React from 'react';
import logo from './react.svg';
import './Home.css';

class About extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to About page</h2>
        </div>
        <p className="Home-intro">
          Hello at about page
        </p>
      </div>
    );
  }
}

export default About;
