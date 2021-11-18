import React, { FormEvent } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import Business_SignUp_Hero from './assets/img/background/Business_SignUp_Hero.png';
import { signUpBusiness } from './features/user/userSlice';

export default function BusinessSignup() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUpBusiness());
    navigate('/');
  };

  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Business_SignUp_Hero})`, backgroundSize: 'cover', backgroundPositionX: 'right' }}>
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-12 col-md-9">
              <div className="spacingsmall" />
              <div className="mb-3">
                <h2 className="redtitle" style={{ fontWeight: 500 }}>{t('business_signup.business_title')}</h2>
                <h1 className="redtitle hero-heading display-3 ">{t('business_signup.sign_up')}</h1>
              </div>
              <div className="spacingsmall" />
              <div className="cardbusiness formcurve border-0 p-4 mt-4">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="fname" className="text-light fw-bold">{t('business_signup.first_name')}</label>
                        <input type="text" id="fname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="lname" className="text-light fw-bold">{t('business_signup.last_name')}</label>
                        <input type="password" id="lname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="Email" className="text-light fw-bold">{t('business_signup.email')}</label>
                        <input type="email" id="Email" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password" className="text-light fw-bold">{t('business_signup.password')}</label>
                        <input type="text" id="password" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password-confirm" className="text-light fw-bold">{t('business_signup.confirm_password')}</label>
                        <input type="password" id="password-confirm" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <span className="text-light">
                          <Trans i18nKey="business_signup.agree_title">
                            By signing up you agree to the
                            <Link to="/legal" className="text-white fw-bold">terms and conditions</Link>
                          </Trans>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button className="py-2 btn btn-dark formcurve" style={{ fontSize: '22px', fontWeight: 700, backgroundColor: '#5E7472' }} type="submit">
                          {t('business_signup.create_your_account')}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacingsmall" />
      </div>
    </main>
  );
}
