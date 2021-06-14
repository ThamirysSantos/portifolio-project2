import React from 'react';
import Profile from '../pictures/profile.jpg';
import '../css/About.css';

function About() {
  return(
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="main info">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img src={Profile} className="outer-shadow" alt="profile" />
            </div>
          </div>
          <div className="about-info">
            <p><span>Hi! My name is Thamirys. I am a Web Developer</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p> 
              <p>cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;