import AboutUs_Hero from './assets/img/background/AboutUs_Hero.jpg';
import bluestrip from './assets/img/background/bluestrip.jpg';
import Logo_AboutUs from './assets/img/general/Logo_AboutUs.png';
import ZippyCash_Icons_D from './assets/img/roundicons/aboutus/ZippyCash_Icons_D.png'
import ZippyCash_Icons_E from './assets/img/roundicons/aboutus/ZippyCash_Icons_E.png'
import ZippyCash_Icons_F from './assets/img/roundicons/aboutus/ZippyCash_Icons_F.png'
import ZippyCash_Icons_G from './assets/img/roundicons/aboutus/ZippyCash_Icons_G.png'

export default function About() {
  return (
    <main>
      <div>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-12 col-md-5 col-lg-4">
                <br /><br />
                <h2 className="redsubtitle">Who is</h2>
                <img src={Logo_AboutUs} alt="zippy.cash?" className="img-fluid" /><br /><br />
                <p className="content-home" style={{ fontWeight: 600 }}>We're finance geeks who know the system. And we think it's too complicated, too expensive and too difficult. Just because it's always been that way doesn't mean we can't do better. We're passionate about working the system to make it rewarding for everyone. We created Zippy Cash to deliver on that promise.
                </p>
                <br />
                <p className="content-home">
                  In a fair world, transparent and affordable financial services would be accessible to all, regardless of who they are. But… you need a law degree to understand the fine print and in the end, consumers end up getting ripped off -
                  especially those who have less. Zippy Cash exists to break these chains and make easy, fast, secure payments a reality for anyone who wants them!
                </p>
                <div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-8" style={{ backgroundImage: `url(${AboutUs_Hero})`, backgroundSize: 'cover' }}>
                <div>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ backgroundImage: `url(${bluestrip})`, backgroundRepeat: 'repeat-x' }}>
                <div className="row mt-4">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img src={ZippyCash_Icons_D} alt="styled icon of a man holding a star"
                        className="img-fluid centerimage" data-aos="flip-left" />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">THE TEAM</h4>
                      <p className="content-home">We're finance and tech geeks who are passionate about the freedom of choice the digital world has made possible. We love other out-of-the-box thinkers and FinTech wizards so if that's you, check out Zippy Cash
                        employment opportunities here.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img src={ZippyCash_Icons_E} alt="styled icon of a man holding a light bulb"
                        className="img-fluid  centerimage" data-aos="flip-left" />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">OUR MISSION</h4>
                      <p className="content-home">Our mission is to level the playing field and reward customers for doing the things they do every day - even the small stuff. We do this through expertise, partnerships and best-in-class tech that allows us
                        to power up your money - faster, easier, safer... and fun too - that's Zippy!</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img src={ZippyCash_Icons_F} alt="styled icon of a woman holding a heart"
                        className="img-fluid  centerimage" data-aos="flip-left" />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">OUR VALUES</h4>
                      <p className="content-home">We believe our customers deserve the utmost in security and transparency. We believe in choices for everyone, regardless of how big your bank account is. We believe in rewarding our customers every day, because we know a little more money can give folks a lot more power. And it's about time that power was accessible to everyone.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img src={ZippyCash_Icons_G} alt="styled icon of a person holding a mechnical gear"
                        className="img-fluid  centerimage" data-aos="flip-left" />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">OUR PARTNERS</h4>
                      <p className="content-home">We work hand in hand with government bodies and financial industry partners to ensure our customers get the best of the best. Check out who's on our roster.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}