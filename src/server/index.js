import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';
import Routes from '../components/routes';
import express from 'express';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import fs from 'fs';
import path from 'path';

import regRouter from './routers/registration';
import downRouter from './routers/download';
import mistRouter from './routers/mistake';
import enterRouter from './routers/enter';
import startRouter from './routers/start';

const app = express();
const CONNECTION_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Users completed');
  }
);

/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: 'Забей калик ежжи!'
}).then((message) => console.log(message.sid));
*/

app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/registration', regRouter);
app.use('/download', downRouter);
app.use('/mistake', mistRouter);
app.use('/enter', enterRouter);
app.use('/start', startRouter);

app.get('*', (req, res, next) => {
  const activeRouter = Routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then(data => {
    const context = { data };
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data} />
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>collab</title>
                  <link rel="stylesheet" type="text/css" href="../../main.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='/bundles/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(data)}</script>
                            <title>COLLAB</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});

/*
app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});
*/

app.listen(8080, () => {console.log('Server started!')});
