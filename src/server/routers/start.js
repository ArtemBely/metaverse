import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Start from '../../components/Start';

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
  var user = req.user;
  const congrats = renderToString(
    <StaticRouter>
       <Start />
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
                       <script>window.__INITIAL_USER__= ${serialize(user)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

router.get('/details/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  res.redirect('/enter');
});

router.get('/sendJSON', isLoggedIn, (req, res, next) => {
    var user = req.user;
    res.status(200).json(user);
});

function isLoggedIn(req, res, next) {
   if(req.isAuthenticated()) {
     return next();
   }
   res.redirect('/enter');
}

export default router;
