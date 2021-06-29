import React from 'react';
import logo from './react.svg';
import './Home.css';
import {moduleName} from "@inside/aboutus"
const fetch = require('node-fetch');
import { connect } from 'react-redux'


const enhance=connect((store)=>{
  return ({data: store.data})
}, {})
class SomeDiffPage extends React.Component {
  render() {
    if(!this.props.data){
      return <h1>No data</h1>
    }

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to SomeDiffPage</h2>
        </div>
        <ul>
          {this.props.data[0].rates.map(({currency, mid})=><li>
            {currency} {mid}
          </li>)}
        </ul>
      </div>
    );
  }
}

SomeDiffPage.preload = async (dispatch) => {
  return fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').then(res=>res.json()).then(res=>{
    dispatch({
      type: 'upload',
      data: res
    })
  })
}

export default enhance(SomeDiffPage);
