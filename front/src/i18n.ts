import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esAR from './static/locales/es-AR.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'es-AR': {
        translation: esAR,
      },
    },
    supportedLngs: ['es-AR'],
    fallbackLng: 'es-AR',
    nsSeparator: '.',
    debug: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
