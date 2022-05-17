import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import passport from 'passport';
import mongoose from 'mongoose';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Enter from '../../components/Enter';
import Start from '../../components/Start';
import User from '../models/user.js';
//import { I18nextProvider } from 'react-i18next';

//const i18nextMiddleware = require('i18next-http-middleware');
//import i18n from '../i18n';
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/', (req, res) => {
  const congrats = renderToString(
  //  <I18nextProvider i18n={req.i18n}>
            <StaticRouter>
               <Enter />
            </StaticRouter>
  //  </I18nextProvider>
  )

  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="./main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

router.post('/', (req, res, done) => {

    const { email, password } = req.body;

    req.checkBody("email", "Wrong type of email field").isEmail();
    req.checkBody("password", "Minimal length of 'password' field is 5").isLength({min: 5});

    var errors = req.validationErrors();

    if(errors) {
        console.log(errors);
          var err = errors.map(er => er.msg);
          const dB = renderToString(
            <StaticRouter>
              <Enter />
            </StaticRouter>
          );
          const html =
          `<!DOCTYPE html>
            <html>
                <head>
                  <title>Database</title>
                       <link rel="stylesheet" type="text/css" href="./main.css">
                         <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
                </head>
                <body>
                     <div id="app">
                         ${dB}
                     </div>
                </body>
            </html>`
            return res.send(html);
    }

    User.findOne({email: email}, function(err, user) {
     if(err) {return done(err)};
     if(user) {
       const errors = ['This email is already in use'];
       const cond = req.isAuthenticated();
       const dB = renderToString(
         <StaticRouter>
           <Enter />
         </StaticRouter>
       );
       const mark =
       `<!DOCTYPE html>
         <html>
             <head>
               <title>Database</title>
                    <link rel="stylesheet" type="text/css" href="./main.css">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                   <script src='bundles/bundle.js' defer></script>
                <script>window.__INITIAL_DATA__= ${serialize(errors)}</script>
             </head>
             <body>
                  <div id="app">
                      ${dB}
                  </div>
             </body>
         </html>`
       res.send(mark);
       return done(null, false);
     }
     var newUser = new User({
       email: email,
       password: password,
       nick: "user1"
     });

    User.createUser(newUser, function(err, user) {
        if (err) throw err;
        console.log(user);
   });

{/*   const success = ['Регистрация завершена успешно, можете войти'];
   const isAuth = req.isAuthenticated();
   const dB = renderToString(
   <StaticRouter>
      <Enter />
   </StaticRouter>
 )
    res.send(
     `<!DOCTYPE html>
         <html>
             <head>
               <title>Проверка кода</title>
                    <link rel="stylesheet" type="text/css" href="./main.css">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                        <script src='bundles/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(success)}</script>
                        <script>window.__INITIAL_AUTH__= ${serialize(isAuth)}</script>
                        </head>
                      <body>
                    <div id="app">
                  ${dB}
               </div>
             </body>
         </html>`
       );*/}
     });

});

passport.use('local.signin', new LocalStrategy ({
   usernameField: 'email',
   passwordField: 'password',
   passReqToCallback: true
},
   function(req, email, password, done) {
   User.findOne({email: email}, async function(err, user) {
   if(err) {
     console.log(err);
     return done(err);
   }

   if(!user) {
     req.flash('errors', 'Не найдено пользователей или неверный пароль');
     console.log('Не найдено пользователей. Ошибка в почте');
     return done(null, false);
   }

   User.comparePassword(password, user.password, function(err, isMatch) {
       if (err) throw err;
       if(isMatch) {
         return done(null, user);
       }
       else {
         req.flash('errors', 'Не найдено пользователей или неверный пароль');
         console.log('Неверный пароль');
         return done(null, false)
       }
     });
     
   });
 }));

     router.post('/signin',
       passport.authenticate('local.signin', {
       successRedirect: '/start',
       failureRedirect: '/enter',
       passReqToCallback: true
    })
);

function isLoggedIn(req, res, next) {
 if(req.isAuthenticated()) {
   return next();
 }
 res.redirect('/enter');
}

export default router;
