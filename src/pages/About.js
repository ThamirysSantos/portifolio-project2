import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pictures/profile.jpg';
import Curriculo from '../cv.pdf';
import Skills from '../components/Skills';
import '../css/About.css';
import '../css/FontAwesome.css';
import Experience from '../components/Experience';

function About() {
  const [ activeTab, setActiveTab ] = useState('skills');
  
  const handleClick = ({ target }) => {
    if( target.className === 'tab-item'){
      target.className = 'tab-item outer-shadow active';
    } else {
      target.className = 'tab-item';
    }
    setActiveTab(target.id);
  }

  const renderAboutTabs = (AboutTab) => {
    switch (AboutTab) {
      case "skills":
        return(<Skills />);
      case "experience":
        return(<Experience />);
      case "education":
        return(<Skills />);
      default:
        break;
    }
  }

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
            <div className="social-links">
              <a href="#" className="outer-shadow houver-in-shadow instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="outer-shadow houver-in-shadow linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="outer-shadow houver-in-shadow github"><i className="fab fa-github"></i></a>
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
              <a
                href={Curriculo}
                className="btn-1 outer-shadow houver-in-shadow"
              >
                Download CV
              </a>
              <Link
                to=""
                className="btn-1 outer-shadow houver-in-shadow"
              >
                Contact me
              </Link>
          </div>
        </div>
        <div className="row">
          <div className="about-tabs">
            <span
              id="skills"
              className="tab-item outer-shadow active"
              data-target=".skills"
              onClick={(e) => handleClick(e)}
            >
              skills
            </span>
            <span
              id="experience"
              className="tab-item"
              data-target=".experience"
              onClick={(e) => handleClick(e)}
            >
              experience
            </span>
            <span
              id="education"
              className="tab-item"
              data-target=".education"
              onClick={(e) => handleClick(e)}
            >
              education
            </span>
          </div>
        </div>
        {renderAboutTabs(activeTab)}
      </div>
    </section>
  );
}

export default About;