import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Menu.css';

function Menu() {
  const history = useHistory();

  const handleClick = () => { 
    history.push('/');
  };

  return(
    <nav class="nav-menu">
      <button 
        class="close-nav-menu outer-shadow houver-in-shadow"
        onClick={handleClick}
      >
        &times;
      </button>
      <div class="nav-menu-inner">
        <ul>
          <li><a href="#" class="inner-shadow active">home</a></li>
          <li><a href="#" class="outer-shadow houver-in-shadow">about</a></li>
          <li><a href="#" class="outer-shadow houver-in-shadow">portifolio</a></li>
          <li><a href="#" class="outer-shadow houver-in-shadow">contact</a></li>
        </ul>
      </div>
      <p class="copyright-text">&copy; 2021 Thamirys Gonçalves Santos</p>
    </nav>
  );
}

export default Menu;