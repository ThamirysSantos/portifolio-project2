import React from 'react';
import Effects from '../components/Effects';
import Profile from '../pictures/profile.jpg';
import Header from '../components/Header';
import '../css/Home.css';

function Home() {
  return(
    <div>
      <Header />
      <section className="home-section section">
        <Effects />
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="home-text">
              <p>Hello</p>
              <h2>I'm Thamirys</h2>
              <h1>Web FullStack Developer</h1>
              <a href="#" className="btn-1 outer-shadow houver-in-shadow">More About Me</a>
            </div>
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img src={Profile} className="outer-shadow" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
