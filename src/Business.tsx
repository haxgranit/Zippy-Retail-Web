import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';
import ZippyCash_Icons_K from './assets/img/roundicons/business/ZippyCash_Icons_K.png';
import ZippyCash_Icons_L from './assets/img/roundicons/business/ZippyCash_Icons_L.png';
import ZippyCash_Icons_M from './assets/img/roundicons/business/ZippyCash_Icons_M.png';

export default function Business() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Circle_White_01})`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>{t('business.header_title')}</h2>
                <h1 className="redtitle hero-heading display-3" style={{ fontSize: '4em', paddingBottom: '20px' }}>{t("business.header_desc")}</h1>
                <Link to="/business-signup" className="btn rounded-0 my-buttonred">{t('business.sign_up_btn_title')}</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-3">
                <img src={ZippyCash_Icons_K} alt="an illustration of a woman holding dollar signs" className="img-fluid centerimage"  data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-9">
                <p className="m-0 content-home">
                  {t('business.business_description_1')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="bluegradient" className="bg-light">
          <div className="container">
            <div className="row align-items-center py-4  flex-md-row-reverse">
              <div className="col-12 col-md-3 text-end position-relative"  data-aos="flip-left">
                <img src={ZippyCash_Icons_L} alt="illustrated image of young people all touching a large light bulb" className="img-fluid position-absolute top-0 start-50 translate-middle " />
              </div>
              <div className="col-12 col-md-9 circleoverlap">
                <p className="m-0 whitecopy">
                  {t('business.business_description_2')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#EDF5F5' }}>
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-12 col-md-3">
                <img src={ZippyCash_Icons_M} alt="illustrated image of a young woman jumping in the air" className="img-fluid centerimage"  data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-9">
                <p className="m-0 content-home">
                  {t('business.business_description_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}