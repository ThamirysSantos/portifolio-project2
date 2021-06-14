import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {

  return(
    <header class="header">
      <div class="container">
        <div class="row justify-content-between">
          <div class="logo">
            <a href="index.html">T</a>
          </div>
          <Link to="/Menu">
            <div class="hamburger-btn outer-shadow houver-in-shadow">
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
