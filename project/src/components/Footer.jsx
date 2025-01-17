import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container py-4">
          <div className="row">
            {/* Быстрые ссылки */}
            <div className="col-md-6 d-flex flex-column align-items-start">
              <h5 className="footer-title">Быстрые ссылки</h5>
              <ul className="footer-links">
                <li><a href="#">Админ Панель</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Связаться с нами</a></li>
              </ul>
            </div>
  
            {/* Контакты */}
            <div className="col-md-6 d-flex flex-column align-items-end">
              <h5 className="footer-title">Контакты</h5>
              <div className="footer-icons">
              <a href="https://www.facebook.com/enoobis" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/enoobis" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/enoobis" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/enoobis" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/enoobis" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
                </a>

              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mb-1">Copyright © 2025 kgtrip All Rights Reserved.</p>
            <p className="mb-0">Website developed by: enoobis</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;