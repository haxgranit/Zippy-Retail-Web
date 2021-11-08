import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Business from './Business';
import BusinessSignup from './BusinessSignup';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Language from './Language';
import Login from './Login';
import Personal from './Personal';
import PersonalProfile from './PersonalProfile';
import PersonalSignup from './PersonalSignup';

export default function App() {
  useEffect(() => AOS.init(), []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/business-signup" element={<BusinessSignup />} />
        <Route path="/language" element={<Language />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal-profile" element={<PersonalProfile />} />
        <Route path="/personal-signup" element={<PersonalSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}