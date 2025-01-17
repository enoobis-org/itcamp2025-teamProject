import React from 'react';
import '../css/Header.css';
import logo from '../assets/logo2.png'; // Подключаем логотип
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center px-4 py-2">
      {/* Логотип */}
      <div className="d-flex align-items-center">
        <img
          src={logo} // Используем корректный путь к логотипу
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Навигация */}
      <nav>
        <ul className="nav">
          <li className="h6 font-weight-bold text-dark nav-item">
            <Link to="/" className="font-weight-bold text-dark nav-link">
              Главная
            </Link>
          </li>
          <li className="h6 font-weight-bold text-dark nav-item">
            <Link to="/services" className="font-weight-bold text-dark nav-link">
              Услуги
            </Link>
          </li>
          <li className="h6 font-weight-bold text-dark nav-item">
            <Link to="/locations" className="font-weight-bold text-dark nav-link">
              Локации
            </Link>
          </li>
          <li className="h6 font-weight-bold text-dark nav-item">
            <Link to="/about" className="font-weight-bold text-dark nav-link">
              О нас
            </Link>
          </li>
          <li className="h6 font-weight-bold text-dark nav-item">
            <Link to="/contact" className="font-weight-bold text-dark nav-link">
              Свяжитесь с нами
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
