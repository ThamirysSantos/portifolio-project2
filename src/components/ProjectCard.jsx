import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Projects.css';

function ProjectCard(props) {
  const { imagePath, id, name, onClick } = props;
  
  return(
    <div className="project-item" id={id}>
      <div className="project-item-inner outer-shadow">
        <div className="project-item-img" id={id} onClick={onClick}>
          <img src={imagePath} alt="profile" data-screenshots="img"/>
          <Link to="/" className="view-project">
            view project
          </Link>
        </div>
        <p className="project-item-title">{name}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imagePath: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default ProjectCard;