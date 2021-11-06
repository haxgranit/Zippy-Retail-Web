import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';

export default function Login() {
  return (
    <div>
      <main>
        <div className="bg-light" style={{ backgroundImage: `url(${Circle_White_01})`, backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row py-4">
              <div className="col-12 col-md-3">
                <div className="mb-3">
                  <h2 className="redtitle" style={{ fontWeight: 500, paddingTop: '40px' }}>account</h2>
                  <h1 className="redtitle hero-heading display-3 ">Login</h1>
                </div>
              </div>
            </div>
            <div className="row mt-4 align-items-center">
              <div className="col-12 col-md-12 col-lg-4">
                <div className="row">
                  <div className="col-12">
                    <p className="fw-bold text-dark line-height-double">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac justo odio. Sed a tellus ut mi facilisis dapibus non vitae leo. Donec porttitor turpis accumsan dui feugiat
                      facilisis. Aenean maximus augue vel eros maximus, sit amet pulvinar nisl iaculis.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-8">
                <div className="card formcurve border-0 p-4 shadow">
                  <div className="card-body">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                          <label htmlFor="username" className="text-light fw-bold">Username</label>
                          <input type="text" id="username" className="form-control formcurve" />
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                          <label htmlFor="password" className="text-light fw-bold">Password</label>
                          <input type="password" id="password" className="form-control formcurve" />
                        </div>
                        <div className="col-12 mb-4">
                          <input type="checkbox" id="tos" className="me-2 form-check-input formcurve" />{' '}
                          <label htmlFor="tos" className="text-light">I agree to lorem ipsum dolor sit amet</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button className="text-uppercase px-5-wide py-2 btn btn-dark formcurve" style={{ fontSize: '22px', fontWeight: 700, backgroundColor: '#5E7472' }} type="submit">
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacingmedium"></div>
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