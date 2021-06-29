import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { renderRoutes } from "react-router-config";
import './App.css';
import {aboutUsRoute} from '@inside/aboutus'

const ApplicationWrapper = ({route})=>{

  console.log('!!!')
  console.log(route.routes)
  return <div>{route.routes && renderRoutes(route.routes)}</div>
}

const routes = [
  {
    component: ApplicationWrapper,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      aboutUsRoute,
    ]
  }
];
 

const App = () => (
  renderRoutes(routes)
);

export default App;
