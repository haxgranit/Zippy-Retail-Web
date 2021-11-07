import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Business from './Business';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Personal from './Personal';

export default function App() {
  useEffect(() => AOS.init(), []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}