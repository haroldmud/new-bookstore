import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <h1>BOOKSTORE</h1>
      <nav>
        <Link to="/">Book</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </header>
  );
}

export default Header;
