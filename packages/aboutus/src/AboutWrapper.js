import React from 'react';
import { Switch, Router } from "react-router";
import { renderRoutes } from "react-router-config";

export const AboutWrapper = ({route, history})=>{
  return <div>
    <h1>Hello in about page section</h1>
    <Router history={history}>{renderRoutes(route.routes)}</Router></div>
}