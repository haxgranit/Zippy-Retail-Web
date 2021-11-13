import React from 'react';
import { Link } from 'react-router-dom';
import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';

export default function Login() {
  return (
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
                  <p className="fw-bold text-dark line-height-double">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ac justo odio.
                    Sed a tellus ut mi facilisis dapibus non vitae leo.
                    Donec porttitor turpis accumsan dui feugiat
                    facilisis. Aenean maximus augue vel eros maximus,
                    sit amet pulvinar nisl iaculis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <div className="card formcurve border-0 p-4 shadow">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="username" className="text-light fw-bold w-100">
                          Username
                          <input type="text" id="username" className="form-control formcurve" />
                        </label>
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password" className="text-light fw-bold w-100">
                          Password
                          <input type="password" id="password" className="form-control formcurve" />
                        </label>
                      </div>
                      <div className="col-12 mb-4">
                        <input type="checkbox" id="tos" className="me-2 form-check-input formcurve" />
                        {' '}
                        <label htmlFor="tos" className="text-light">
                          I agree to the
                          {' '}
                          <Link to="/legal" className="text-decoration-none">terms and conditions</Link>
                        </label>
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
        <div className="spacingmedium" />
      </div>
    </main>
  );
}
