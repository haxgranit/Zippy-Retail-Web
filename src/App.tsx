import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="public/img/general/ZippyCash_Logo.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-md-column nav-uppercase" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-md-5">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#">LANGUAGE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="login.html">LOGIN</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="about.html">about us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="personal.html">personal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="business.html">business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="personal-profile.html">dev docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="search.html"><i className="fa fa-search"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="hero slider">
        <div className="slider-slide" style={{ backgroundImage: 'url(\'public/img/slider/ZippyCash_Landing_Slider-01.jpg\')' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="sliderh2">personal banking</h2>
                <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                <a className="hero-button btn btn-light rounded-0" href="personal-signup.html">SIGN UP!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-slide" style={{ backgroundImage: 'url(\'public/img/slider/ZippyCash_Landing_Slider-02.jpg\')' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="sliderh2">personal banking</h2>
                <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                <a className="hero-button btn btn-light rounded-0" href="personal-signup.html">SIGN UP!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-slide" style={{ backgroundImage: 'url(\'public/img/slider/ZippyCash_Landing_Slider-03.jpg\')' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="sliderh2">personal sign up</h2>
                <h1 className="hero-heading display-3 fw-bold">Zipp it<br />to me!</h1>
                <a className="hero-button btn btn-light rounded-0" href="business-signup.html">SIGN UP!</a>
              </div>
            </div>
          </div>
        </div>
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
                <a href="business-signup.html" className="btn btn-light rounded-0 my-button">SIGN UP!</a>
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
                <img src="public/img/roundicons/home/ZippyCash_Icons_A.png" alt="happy young woman on her phone" className="img-fluid centerimage" data-aos="flip-left" />
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
                <img src="public/img/roundicons/home/ZippyCash_Icons_B.png" alt="young man looking positive" className="img-fluid position-absolute top-0 start-50 translate-middle" data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-6 col-lg-9 circleoverlap">
                <br />
                <h2 className="whitetitle">How do we make it so cheap?</h2>
                <p className="m-0 whitecopy">
                  We think financial services should be a win-win.We take less of your money because fees just don't need to be that high. <strong>It's that simple.</strong>
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
                <img src="public/img/roundicons/home/ZippyCash_Icons_C.png" alt="smiling young woman" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div className="col-12 col-md-6 col-lg-9">
                <h2 className="redtitle">Our name isn’t just for show.</h2>
                <p className="m-0 content-home">
                  Zippy is zippier.A lot zippier.Almost instantaneous, even across borders.We doubled down on speed and security to make sure your money goes where you want it, when you want it, with nothing getting in the way.<strong>You've got places to go after all, so go on!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container mb-3">
        {/* Tab and desktop footer */}
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-between border-bottom">
            <div className="">
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Lorem Ipsum</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Nullam</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Ferme</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Odio Sit</a></div>
            </div>
          </div>
          <div className="d-flex justify-content-between border-top">
            <div className="">
              <div className="footer-link mt-1"><a href="#" className="text-decoration-none">Faucbus</a></div>
              <div className="footer-link mt-1"><a href="#" className="text-decoration-none">Lore</a></div>
              <div className="footer-link mt-1"><a href="#" className="text-decoration-none">Ipsum</a></div>
              <div className="footer-link mt-1"><a href="#" className="text-decoration-none">Nullam Atoidio</a></div>
            </div>
            <div className="copyright mt-1">
              <span className="text-decoration-none">© 2021 Lorem ipsum dolor sit amet, consectetuer</span>
            </div>
          </div>
        </div>
        {/* mobile only footer */}
        <div className="d-block d-md-none">
          <div className="d-flex border-bottom">
            <div className="d-flex flex-column me-3">
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Lorem Ipsum</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Nullam</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Ferme</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Odio Sit</a></div>
            </div>
            <div className="d-flex flex-column me-2">
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Faucbus</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Lore</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Ipsum</a></div>
              <div className="footer-link mb-1"><a href="#" className="text-decoration-none">Nullam Atoidio</a></div>
            </div>
          </div>
          <div className="d-flex justify-content-end border-top">
            <div className="copyright mt-2 text-end small">
              <span className="text-decoration-none">© 2021 Lorem ipsum dolor sit amet, consectetuer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
