import { Link } from 'react-router-dom';
import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';
import ZippyCash_Icons_K from './assets/img/roundicons/business/ZippyCash_Icons_K.png';
import ZippyCash_Icons_L from './assets/img/roundicons/business/ZippyCash_Icons_L.png';
import ZippyCash_Icons_M from './assets/img/roundicons/business/ZippyCash_Icons_M.png';

export default function Business() {
  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Circle_White_01})`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>business banking</h2>
                <h1 className="redtitle hero-heading display-3" style={{ fontSize: '4em', paddingBottom: '20px' }}>Make your money work your way!</h1>
                <Link to="/business-signup" className="btn rounded-0 my-buttonred">Sign up for a business account</Link>
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
                  No matter how big or small your business is, everyone is in the global market. That's why you need the best rates and lowest fees for you brand. Zippy Cash gives you the best rates available every time and takes the complexity out of international commerce. Our fees can't be beat.
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
                  Setting up international bank accounts may sound daunting but with Zippy we deliver everything you need to start managing accounts abroad in minutes. How is it this easy? We have excellent partnerships with international financial brands, tech solutions that serve as an efficient connector, prioritizing ease, speed and security.
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
                  Paying invoices, people and employees just got zippier. We always give you the lowest transaction fees and make it easy (dare we say even fun?) to manage your payments.<br />Find out more here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}