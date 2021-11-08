//
// This is a placeholder page for testing language selection.
//

import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation();

  function changeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="container">
      <div className="row">
        <div>
          <div>
            <a href="#" onClick={() => changeLanguage('en-CA')}>Canadian English</a>
          </div>
          <div>
            <a href="#" onClick={() => changeLanguage('fr-CA')}>Canadian French</a>
          </div>
          <div>
            <a href="#" onClick={() => changeLanguage('en-US')}>American English</a>
          </div>
          <div>
            <a href="#" onClick={() => changeLanguage('es-US')}>American Spanish</a>
          </div>
        </div>
      </div>
    </div>
  );
}