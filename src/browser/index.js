import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import '../server/i18n';
/*
hydrate(
  <BrowserRouter>
      <App data={window.initialI18nStore} lang={window.initialLanguage}/>
  </BrowserRouter>,
  document.getElementById('app')

);
*/

hydrate(
  <BrowserRouter>
      <App data={window.__INITIAL_DATA__}/>
  </BrowserRouter>,
  document.getElementById('app')

);
