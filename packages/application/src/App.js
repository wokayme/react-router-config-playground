import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SomeDiffPage from './SomeDiffPage';
import About from './About';
import { renderRoutes } from "react-router-config";
import './App.css';
import {aboutUsRoute} from '@inside/aboutus'
import { Provider } from 'react-redux'
import {clientStore} from './store'

const ApplicationWrapper = ({route})=>{

  return <div>{route.routes && renderRoutes(route.routes)}</div>
}

export const routes = [
  {
    component: ApplicationWrapper,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/diffPage",
        exact: true,
        component: SomeDiffPage,
      },
      aboutUsRoute
    ]
  }
];
 

const App = () => {
  const isServer = !(typeof window === 'object');
  console.log(isServer)
  if(isServer){
    return (
      renderRoutes(routes)
    )
  }
  return (
    <Provider store={clientStore}>
      {renderRoutes(routes)}
    </Provider>
  )
};

export default App;
