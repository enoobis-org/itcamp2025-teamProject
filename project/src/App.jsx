import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Images from './components/Images';
import Slider from './components/Slider';
import TravelForm from './components/TravelForm';
import ServicesList from './components/ServicesList';
import videoFile from './assets/video.mp4';
import './css/VideoSection.css';
import './css/TravelForm.css';

// Pages
const Home = () => (
  <>
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
<source src={videoFile} type="video/mp4" />
Ваш браузер не поддерживает видео.
        </video>
      <div className="video-darken"></div>
      <div className="video-overlay">
        <h1>kgtrip</h1>
        <h5>Ваш надежный проводник в неизведанный мир Кыргызстана.</h5>
        <h5>Горы, озера, культура и адреналин ждут вас.</h5>
      </div>
    </div>
    <main style={{ flex: '1', padding: '20px', marginTop: '60px' }}>
      <div className="text-center text-dark">
        <h1>Услуги</h1>
      </div>
      <ServicesList />
      <div className="text-center text-dark">
        <h1>Локации</h1>
      </div>
      <Images />
      <br />
      <div className="text-center text-dark">
        <h1>О нас</h1>
      </div>
      <Slider />
      <div className="text-center text-dark">
        <h1>Свяжитесь с нами</h1>
      </div>
      <TravelForm />
      <br />
    </main>
  </>
);

const Services = () => (
  <main>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="text-center text-dark">
        <h1>Услуги</h1>
      </div>
    <ServicesList />
  </main>
);

const Locations = () => (
  <main>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="text-center text-dark">
        <h1>Локации</h1>
      </div>
    <Images />
    <br/>
    <br/>
  </main>
);

const About = () => (
  <main>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="text-center text-dark">
        <h1>О нас</h1>
      </div>
    <Slider />
    <br/>
    <br/>
  </main>
);

const Contact = () => (
  <main>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="text-center text-dark">
        <h1>Свяжитесь с нами</h1>
      </div>
    <TravelForm />
  </main>
);

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



