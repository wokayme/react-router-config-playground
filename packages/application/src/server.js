import App, {routes} from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from "react-router-config";
import { mainReducer } from './store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ?
  assets[entrypoint].css.map(asset=>
    `<link rel="stylesheet" href="${asset}">`
  ).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint] ? assets[entrypoint].js ?
  assets[entrypoint].js.map(asset=>
    `<script src="${asset}"${extra}></script>`
  ).join('') : '' : '';
};

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const context = {};

    const store = createStore(mainReducer);

    const matchingRoutes = matchRoutes(routes, req.url);
    const preloads = matchingRoutes.map(({route: {component}})=>component?.preload).filter(Boolean);

    const prefetchData = await Promise.all(preloads.map(fn=>fn(store.dispatch)))

    const reduxStore = store.getState();

    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__REDUX_INIT_STATE = '${JSON.stringify(reduxStore)}';
        </script>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
</html>`
      );
    }
  });

export default server;
