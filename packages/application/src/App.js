import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { renderRoutes } from "react-router-config";
import './App.css';

const ApplicationWrapper = ({route})=>{
  return <div>{renderRoutes(route.routes)}</div>
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
      {
        path: "/about",
        exact: true,
        component: About
      },
    ]
  }
];
 

const App = () => (
  renderRoutes(routes)
);

export default App;
