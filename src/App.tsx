import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';

export default function App() {
  useEffect(() => AOS.init(), []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}