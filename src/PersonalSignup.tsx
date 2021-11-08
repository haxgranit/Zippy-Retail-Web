import Personal_SignUp_Hero from './assets/img/background/Personal_SignUp_Hero.jpg';

export default function PersonalSignup() {
  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Personal_SignUp_Hero})`, backgroundSize: 'cover', backgroundPositionX: 'left' }}>
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-12 col-md-9">
              <div className="spacingsmall"></div>
              <div className="mb-3">
                <h2 className="redtitle" style={{ fontWeight: 500 }}>personal banking</h2>
                <h1 className="redtitle hero-heading display-3 ">Sign Up</h1>
              </div>
              <div className="spacingsmall"></div>
              <div className="cardbusiness formcurve border-0 p-4 mt-4">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="fname" className="text-light fw-bold">First Name</label>
                        <input type="text" id="fname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="lname" className="text-light fw-bold">Last Name</label>
                        <input type="password" id="lname" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="Email" className="text-light fw-bold">Email</label>
                        <input type="email" id="Email" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password" className="text-light fw-bold">Password</label>
                        <input type="text" id="password" className="form-control formcurve" />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="password-confirm" className="text-light fw-bold">Confirm Password</label>
                        <input type="password" id="password-confirm" className="form-control formcurve" />
                      </div>
                      <div className="col-12 mb-4">
                        <input type="checkbox" id="tos" className="me-2 form-check-input formcurve" />{' '}
                        <label htmlFor="tos" className="text-light">I agree to lorem ipsum dolor sit amet</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button className="py-2 btn btn-dark formcurve" style={{ fontSize: '22px', fontWeight: 700, backgroundColor: '#5E7472' }} type="submit">
                          Create your account
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