import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import path from 'path';
//import LanguageDetector from 'i18next-browser-languagedetector';

import { readdirSync, lstatSync } from 'fs';
//import middleware from 'i18next-http-middleware';

import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["en", "de", "ru"],
    debug: false,
    detection: {
      order: ['path', 'cookie', 'localStorage',
        'htmlTag', 'subdomain']
    },
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns, clb) => {
          import(`../../public/locales/${lng}/translations.json`)
                .then((resources) => clb(null, resources))
                .catch(clb)
        })
      ],
      backendOptions: [{
        loadPath: '../../public/locales/{{lng}}/translations.json'
      }]
    },
    react: { useSuspense: false }
  });

export default i18n;
