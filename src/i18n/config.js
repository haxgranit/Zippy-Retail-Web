import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LegalEnCAText, LegalEnUSText, LegalEsUSText, LegalFrCAText } from './components';

i18n.use(initReactI18next).init({
  fallbackLng: 'en-US',
  lng: 'en-US',
  resources: {
    'en-CA': {
      translations: {
        ...require('./locales/en-CA/translations.json'),
        legal: {
          text: (
            <>
              <LegalEnCAText />
            </>
          )
        }
      }
    },
    'en-US': {
      translations: {
        ...require('./locales/en-US/translations.json'),
        legal: {
          text: (
            <>
              <LegalEnUSText />
            </>
          )
        }
      }
    },
    'es-US': {
      translations: {
        ...require('./locales/es-US/translations.json'),
        legal: {
          text: (
            <>
              <LegalEsUSText />
            </>
          )
        }
      }
    },
    'fr-CA': {
      translations: {
        ...require('./locales/fr-CA/translations.json'),
        legal: {
          text: (
            <>
              <LegalFrCAText />
            </>
          )
        }
      }
    },
  },
  returnObjects: false,
  returnedObjectHandler: (key, value, options) => value,
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en-CA', 'en-US', 'es-US', 'fr-CA'];

export default i18n;