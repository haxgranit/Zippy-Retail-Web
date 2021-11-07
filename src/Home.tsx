import Slider from 'react-slick';
import ZippyCash_Landing_Slider_01 from './assets/img/slider/ZippyCash_Landing_Slider-01.jpg';
import ZippyCash_Landing_Slider_02 from './assets/img/slider/ZippyCash_Landing_Slider-02.jpg';
import ZippyCash_Landing_Slider_03 from './assets/img/slider/ZippyCash_Landing_Slider-03.jpg';
import ZippyCash_Icons_A from './assets/img/roundicons/home/ZippyCash_Icons_A.png';
import ZippyCash_Icons_B from './assets/img/roundicons/home/ZippyCash_Icons_B.png';
import ZippyCash_Icons_C from './assets/img/roundicons/home/ZippyCash_Icons_C.png';
import { Link } from 'react-router-dom';

export default function Home() {
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
                    <h2 className="sliderh2">personal banking</h2>
                    <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                    <Link to="/personal-signup" className="hero-button btn btn-light rounded-0">SIGN UP!</Link>
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
                    <h2 className="sliderh2">personal banking</h2>
                    <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                    <Link to="/personal-signup" className="hero-button btn btn-light rounded-0">SIGN UP!</Link>
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
                    <h2 className="sliderh2">personal sign up</h2>
                    <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                    <Link to="/business-signup" className="hero-button btn btn-light rounded-0">SIGN UP!</Link>
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
                <h2>business banking</h2>
                <h1 className="fw-bold">A little more money. A lot more power.</h1>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Link to="/business-signup" className="btn btn-light rounded-0 my-button">SIGN UP!</Link>
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
                <h2 className="redtitle">Want to get more out of your money?</h2>
                <p className="m-0 content-home">
                  Yes, you can! There is a better way. We make it easier for you to do what you really want with your money: earn it, keep it, send it, save it, use it with as much ease and security as you want - and get rewarded on top of that. Why? Because it's your money and you should have options.<strong> You've got them with Zippy.</strong>
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
                <h2 className="whitetitle">How do we make it so cheap?</h2>
                <p className="m-0 whitecopy">
                  We think financial services should be a win-win. We take less of your money because fees just don't need to be that high. <strong>It's that simple.</strong>
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
                <h2 className="redtitle">Our name isn’t just for show.</h2>
                <p className="m-0 content-home">
                  Zippy is zippier. A lot zippier. Almost instantaneous, even across borders. We doubled down on speed and security to make sure your money goes where you want it, when you want it, with nothing getting in the way. <strong>You've got places to go after all, so go on!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}