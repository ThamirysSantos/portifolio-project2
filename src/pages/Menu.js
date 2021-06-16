import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../css/Menu.css';

function Menu() {
  const history = useHistory();

  const handleClick = () => { 
    history.push('/');
  };

  return(
    <nav className="nav-menu">
      <button 
        className="close-nav-menu outer-shadow houver-in-shadow"
        onClick={handleClick}
      >
        &times;
      </button>
      <div className="nav-menu-inner">
        <ul>
          <li><Link to="/" className="inner-shadow active">home</Link></li>
          <li><Link to="/About" className="outer-shadow houver-in-shadow">about</Link></li>
          <li><Link to="/Projects" className="outer-shadow houver-in-shadow">projects</Link></li>
          <li><Link to="/Contact" className="outer-shadow houver-in-shadow">contact</Link></li>
        </ul>
      </div>
      <p className="copyright-text">&copy; 2021 Thamirys Gonçalves Santos</p>
    </nav>
  );
}

export default Menu;