import React from 'react';
import Effects from '../components/Effects';
import Profile from '../pictures/profile.jpg';
import Header from '../components/Header';
import '../css/Home.css';

function Home() {
  return(
    <div>
      <Header />
      <section class="home-section section">
        <Effects />
        <div class="container">
          <div class="row full-screen align-items-center">
            <div class="home-text">
              <p>Hello</p>
              <h2>I'm Thamirys</h2>
              <h1>Web FullStack Developer</h1>
              <a href="#" class="btn-1 outer-shadow houver-in-shadow">More About Me</a>
            </div>
            <div class="home-img">
              <div class="img-box inner-shadow">
                <img src={Profile} class="outer-shadow" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
