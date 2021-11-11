import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Circle_Grey_01 from './assets/img/background/Circle_Grey-01.jpg';
import orangered from './assets/img/background/orangered.jpg';
import ZippyCash_Icons_H from './assets/img/roundicons/personal/ZippyCash_Icons_H.png';
import ZippyCash_Icons_I from './assets/img/roundicons/personal/ZippyCash_Icons_I.png';
import ZippyCash_Icons_J from './assets/img/roundicons/personal/ZippyCash_Icons_J.png';

export default function Personal() {
  const { t } = useTranslation();
  
  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Circle_Grey_01})`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>{t('personal.personal_banking')}</h2>
                <h1 className="redtitle hero-heading display-3" style={{ fontSize: '4em', paddingBottom: '20px' }}>{t('personal.header_title')}</h1>
                <Link to="/personal-signup" className="btn rounded-0 my-buttonred">{t('personal.sign_up_btn')}</Link>
              </div>
            </div>
          </div>
          <img src={orangered} alt="" className="orangeredbar position-absolute bottom-0" />
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4 position-relative" style={{ zIndex: 1 }}>
              <div className="mb-4">
                <img src={ZippyCash_Icons_H} alt={t('personal.image_alt_1')} className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="redtitle text-center">{t('personal.send_btn')}</h3>
                <p className="content-home">{t('personal.send_description')}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 position-relative">
              <div className="mb-4">
                <img src={ZippyCash_Icons_I} alt={t('personal.image_alt_2')} className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="bluetitle text-center">{t('personal.spend_btn')}</h3>
                <p className="content-home">{t('personal.spend_description')}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4  position-relative">
              <div className="mb-4">
                <img src={ZippyCash_Icons_J} alt={t('personal.image_alt_3')} className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="redtitle text-center">{t('personal.funzpoints')}</h3>
                <p className="content-home">{t('personal.funzpoints_description')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing"></div>
      </div>
    </main>
  );
}