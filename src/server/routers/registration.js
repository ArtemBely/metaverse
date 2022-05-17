import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Registration from '../../components/Registration';

const router = express.Router();

router.get('/', notLoggedIn, (req, res) => {
  let cond = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Registration />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/profile');
}

export default router;
