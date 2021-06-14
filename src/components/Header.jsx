import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {

  return(
    <header className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <a href="index.html">T</a>
          </div>
          <Link to="/Menu">
            <div className="hamburger-btn outer-shadow houver-in-shadow">
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
