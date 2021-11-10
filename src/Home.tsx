import Slider from 'react-slick';
import ZippyCash_Landing_Slider_01 from './assets/img/slider/ZippyCash_Landing_Slider-01.jpg';
import ZippyCash_Landing_Slider_02 from './assets/img/slider/ZippyCash_Landing_Slider-02.jpg';
import ZippyCash_Landing_Slider_03 from './assets/img/slider/ZippyCash_Landing_Slider-03.jpg';
import ZippyCash_Icons_A from './assets/img/roundicons/home/ZippyCash_Icons_A.png';
import ZippyCash_Icons_B from './assets/img/roundicons/home/ZippyCash_Icons_B.png';
import ZippyCash_Icons_C from './assets/img/roundicons/home/ZippyCash_Icons_C.png';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    dotsClass: 'slick-dots'
  };

  return (
    <div>
      <section className="hero slider">
        <Slider {...sliderSettings}>
          <div>
            <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_01})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="sliderh2">{t('common.personal_banking')}</h2>
                    <h1 className="hero-heading display-3 fw-bold">
                      <Trans
                        i18nKey="home.zip_it"
                      />
                      </h1>
                    <Link to="/personal-signup" className="hero-button btn btn-light rounded-0">{t('home.sign_up_btn')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_02})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="sliderh2">{t('common.personal_banking')}</h2>
                    <h1 className="hero-heading display-3 fw-bold">
                      <Trans
                        i18nKey="home.zip_it"
                      />
                    </h1>
                    <Link to="/personal-signup" className="hero-button btn btn-light rounded-0">{t('home.sign_up_btn')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-slide" style={{ backgroundImage: `url(${ZippyCash_Landing_Slider_03})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="sliderh2">{t('home.personal_sign_up')}</h2>
                    <h1 className="hero-heading display-3 fw-bold">
                      <Trans
                        i18nKey="home.zip_it"
                      />  
                    </h1>
                    <Link to="/business-signup" className="hero-button btn btn-light rounded-0">{t('home.sign_up_btn')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className="header-cta text-light mb-4">
        <div id="redgradient" className="ctaband" >
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-8"  >
                <h2>{t("home.business_banking")}</h2>
                <h1 className="fw-bold">{t('home.business_banking_desc')}</h1>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Link to="/business-signup" className="btn btn-light rounded-0 my-button">{t('home.sign_up_btn')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div>
          <div className="container">
            <div className="row align-items-center py-4 flex-md-row-reverse">
              <div className="col-12 col-md-6 col-lg-3">
                <img src={ZippyCash_Icons_A} alt="happy young woman on her phone" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-6 col-lg-9">
                <h2 className="redtitle">{t('home.question_1')}</h2>
                <p className="m-0 content-home">
                  <Trans
                    i18nKey="home.answer_1"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="colorgradient" className="bg-light">
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-6 col-lg-3 text-end position-relative" data-aos="flip-left">
                <img src={ZippyCash_Icons_B} alt="young man looking positive" className="img-fluid position-absolute top-0 start-50 translate-middle" data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-6 col-lg-9 circleoverlap">
                <br />
                <h2 className="whitetitle">{t('home.question_2')}</h2>
                <p className="m-0 whitecopy">
                  <Trans
                    i18nKey="home.answer_2"
                  />
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row align-items-center py-4 flex-md-row-reverse">
              <div className="col-12 col-md-6 col-lg-3">
                <img src={ZippyCash_Icons_C} alt="smiling young woman" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-6 col-lg-9">
                <h2 className="redtitle">{t('home.question_2')}</h2>
                <p className="m-0 content-home">
                  <Trans
                    i18nKey="home.answer_3"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}