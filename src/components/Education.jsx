import React from 'react';
import '../css/FontAwesome.css';
import '../css/TabContents.css';

function Education() {
  return(
    <div className="row">
      <div className="education tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <div className="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2021 - Present</span>
                  <h3>Backend Development</h3>
                  <h4>Trybe</h4>
                  <p>cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2020 - 2021</span>
                  <h3>Frontend Development</h3>
                  <h4>Trybe</h4>
                  <p>cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2018 - 2020</span>
                  <h3>Computer Engineering</h3>
                  <h4>Univali</h4>
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

export default Education;