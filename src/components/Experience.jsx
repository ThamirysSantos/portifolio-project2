import React from 'react';
import '../css/FontAwesome.css';
import '../css/Experience.css';

function Experience() {
  return(
    <div className="row">
      <div className="experience tab-experience">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <div className="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                  <i className="fas fa-briefcase icon"></i>
                  <span>September, 2019 - Present</span>
                  <h3>Backend Engineer</h3>
                  <h4>Itasoft, Brasil</h4>
                  <p>cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;