import { Link } from 'react-router-dom';
import Circle_Grey_01 from './assets/img/background/Circle_Grey-01.jpg';
import orangered from './assets/img/background/orangered.jpg';
import ZippyCash_Icons_H from './assets/img/roundicons/personal/ZippyCash_Icons_H.png';
import ZippyCash_Icons_I from './assets/img/roundicons/personal/ZippyCash_Icons_I.png';
import ZippyCash_Icons_J from './assets/img/roundicons/personal/ZippyCash_Icons_J.png';

export default function Personal() {
  return (
    <main>
      <div className="bg-light" style={{ backgroundImage: `url(${Circle_Grey_01})`, backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="mb-3">
                <h2 style={{ color: '#FF1926' }}>personal banking</h2>
                <h1 className="redtitle hero-heading display-3" style={{ fontSize: '4em', paddingBottom: '20px' }}>You can do that with Zippy!</h1>
                <Link to="personal-signup" className="btn rounded-0 my-buttonred">Sign up for a personal account</Link>
              </div>
            </div>
          </div>
          <img src={orangered} alt="" className="orangeredbar position-absolute bottom-0" />
          <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4 position-relative" style={{ zIndex: 1 }}>
              <div className="mb-4">
                <img src={ZippyCash_Icons_H} alt="young man happily looking at his phone while holding a zippy card" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="redtitle text-center">SEND</h3>
                <p className="content-home">We bet you're wondering, can I send money across the border inexpensively… yes you can! Can I link Zippy to my debit and credit so my transactions are all in one place?…yes you can! Can I Zipp it to my friend Erica for those late night study eats she ordered in? YES YOU CAN. Just say Zipp it to me and it's done!</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 position-relative">
              <div className="mb-4">
                <img src={ZippyCash_Icons_I} alt="a zippy card tapping a debt machine" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="bluetitle text-center">SPEND</h3>
                <p className="content-home">We know what you’re thinking. You want to shop cross border and get the best
                  rates. You want to see all your bills in one spot, at one time. You want the lowest fees when you spend using Zippy
                  Cash. We say.: yes yes and yes again. It's the power of positive thinking! (and a hub platform that centralizes best-inclass
                  financial systems and optimizes options based on your specific needs within seconds - but hey, that's just how we Zipp)</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4  position-relative">
              <div className="mb-4">
                <img src={ZippyCash_Icons_J} alt="young woman playfully showing her zippy card" className="img-fluid centerimage" data-aos="flip-left" />
              </div>
              <div>
                <h3 className="redtitle text-center">FUNZPOINTS</h3>
                <p className="content-home">We like giving you more than you came for. Funzpoints is our social gaming platform that rewards you with entries into daily cash jackpots. Play for free and earn actual dollars you can transfer to your real world wallet! It's so much fun to say "here, have extra!"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing"></div>
      </div>
    </main>
  );
}