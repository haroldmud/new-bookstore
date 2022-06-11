import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import icon from '../icon-user-default.png';

function Header() {
  return (
    <header>
      <div>
        <h1>BOOKSTORE</h1>
        <nav>
          <Link className="link" to="/">BOOK</Link>
          <Link className="link" to="/categories">CATEGORIES</Link>
        </nav>
      </div>
      <div className="iconDiv">
        <img className="icon" src={icon} alt="user icon" />
      </div>
    </header>
  );
}

export default Header;
