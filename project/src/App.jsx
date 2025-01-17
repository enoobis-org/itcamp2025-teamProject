import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Images from './components/Images';
import Slider from './components/Slider';
import TravelForm from './components/TravelForm';
import ServicesList from './components/ServicesList';
import videoFile from './assets/video.mp4';
import Packages from "./components/Packages";
import './css/BestPlaces.css';
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
    <div className="text-center text-dark" style={{ marginTop: '60px' }}>
      <h1>Услуги</h1>
    </div>
    <ServicesList />
  </main>
);

const Locations = () => (
  <main>
    <div className="text-center text-dark" style={{ marginTop: '60px' }}>
      <h1>Локации</h1>
    </div>
    <Images />
  </main>
);

const About = () => (
  <main>
    <div className="text-center text-dark" style={{ marginTop: '60px' }}>
      <h1>О нас</h1>
    </div>
    <Slider />
  </main>
);

const Contact = () => (
  <main>
    <div className="text-center text-dark" style={{ marginTop: '60px' }}>
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
        <section>
        <div className="text-center text-dark" style={{ marginTop: '60px' }}><h2>Лучшие места</h2></div>
          <div className="places">
            <div className="place">
              <img src="https://www.trtavaz.com.tr/uploads/photos/2021/05/04/9976ee96ceff4fce91f26311308ee202.jpg?w=640" alt="Issyk-Kul Lake" />
              <p>Issyk-Kul Lake</p>
            </div>
            <div className="place">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8E-Dp1s-9wjMzRy-8J0rzID5jsV2FSnIQA&s" alt="Song-Kul Lake" />
              <p>Song-Kul Lake</p>
            </div>
            <div className="place">
              <img src="https://gdb.rferl.org/9513a686-b1b5-4ea0-9013-129dbebee515_w1200_r1.jpg" alt="Tian Shan Mountains" />
              <p>Tian Shan Mountains</p>
            </div>
            <div className="place">
              <img src="https://trvlland.com/wp-content/uploads/2020/02/kyrgyzstan_atbashy_c_vasca_0.jpg" alt="At-Bashy" />
              <p>At-Bashy</p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





