import { useTranslation } from 'react-i18next';
import Business_SignUp_Hero from './assets/img/background/Business_SignUp_Hero.png';

export default function BusinessSignup() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Business_SignUp_Hero})`, backgroundSize: 'cover', backgroundPositionX: 'right' }}>
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-12 col-md-9">
              <div className="spacingsmall"></div>
              <div className="mb-3">
                <h2 className="redtitle" style={{ fontWeight: 500 }}>{t('common.business_title')}</h2>
                <h1 className="redtitle hero-heading display-3 ">{t('common.sign_up')}</h1>
              </div>
              <div className="spacingsmall"></div>
              <div className="cardbusiness formcurve border-0 p-4 mt-4">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="fname" className="text-light fw-bold">{t('common.first_name')}</label>
                        <input type="text" id="fname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="lname" className="text-light fw-bold">{t('common.last_name')}</label>
                        <input type="password" id="lname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="Email" className="text-light fw-bold">{t('common.email')}</label>
                        <input type="email" id="Email" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password" className="text-light fw-bold">{t('common.password')}</label>
                        <input type="text" id="password" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password-confirm" className="text-light fw-bold">{t('common.email')}</label>
                        <input type="password" id="password-confirm" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <input type="checkbox" id="tos" className="me-2 form-check-input formcurve" />{' '}
                        <label htmlFor="tos" className="text-light">{t('common.agree_title')}</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button className="py-2 btn btn-dark formcurve" style={{ fontSize: '22px', fontWeight: 700, backgroundColor: '#5E7472' }} type="submit">
                          {t('common.create_your_account')}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacingsmall"></div>
      </div>
    </main>
  );
}