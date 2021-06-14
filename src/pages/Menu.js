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
          <li><a href="#" className="inner-shadow active">home</a></li>
          <li><Link to="/About"><a href="#" className="outer-shadow houver-in-shadow">about</a></Link></li>
          <li><a href="#" className="outer-shadow houver-in-shadow">portifolio</a></li>
          <li><a href="#" className="outer-shadow houver-in-shadow">contact</a></li>
        </ul>
      </div>
      <p className="copyright-text">&copy; 2021 Thamirys Gonçalves Santos</p>
    </nav>
  );
}

export default Menu;