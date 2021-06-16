import React, { useContext } from 'react';
import ProjectCard from '../components/ProjectCard';
import MyContext from '../context/MyContext';
import { useHistory } from 'react-router-dom';
import '../css/Projects.css';

function Projects() {
  const { projectData, setProjectById } = useContext(MyContext);
  const history = useHistory();

  const handleClick = (id) => {
    const currentProject = projectData.find((project) => project.id === id);
    setProjectById(currentProject);
    history.push(`/ProjectDetails/${id}`)
  };
  
  const renderProjectsCards = () => (
    projectData.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        name={project.name}
        imagePath={project.imagePath}
        onClick={() => handleClick(project.id)}
      />
    ))
  );

  return(
    <section className="projects-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="projects">Latest Works</h2>
          </div>
        </div>
        <div className="row">
          <div className="projects-filter">
            <span className="filter-item outer-shadow active" data-target="all">all</span>
            <span className="filter-item" data-target="Frontend">Frontend</span>
            <span className="filter-item" data-target="Backend">Backend</span>
          </div>
        </div>
        <div className="row projects-items">
          { renderProjectsCards() }
        </div>
      </div>
    </section>
  );
}

export default Projects;