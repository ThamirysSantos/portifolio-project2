import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function ProjectDetails() {
  const { projectById } = useContext(MyContext);
  const { imagePath, date, detail, tools, link, name } = projectById;

  return(
    <section>
      <div className="project-item">
          <div className="project-item-inner outer-shadow">
            <div className="project-img">
              <img src={imagePath} alt="profile" data-screenshots="img"/>
            </div>
            <p className="project-item-title">{name}</p>
            <div className="project-item-details">
              <div className="row">
                <div className="description">
                  <h3>Project Brief:</h3>
                  <p>{detail}</p>
                </div>
                <div className="info">
                  <h3>Project Info</h3>
                  <ul>
                    <li>Date - <span>{date}</span></li>
                    <li>Tools - <span>{tools}</span></li>
                    <li>Web - <span><a href={link}>{link}</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default ProjectDetails;