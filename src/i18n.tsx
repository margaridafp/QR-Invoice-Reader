import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

// The translation files
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
// detect user language
    .use(LanguageDetector)
// pass the i18n instance to react-i18next.
    .use(initReactI18next)
// init i18next
    .init({
      resources,
      fallbackLng: 'pt',
      debug: true,
    });

export default i18n;
