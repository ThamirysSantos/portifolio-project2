import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../css/FontAwesome.css';
import '../css/Skills.css'

function Skills() {
  const { iconsData } = useContext(MyContext);
  const classContainer = 'container-skills-icons'
  
  const renderIcons = () => (
    iconsData.map((icon) => (
      <div className={classContainer} key={ icon.text}>
        <i className={`${icon.class} outer-shadow`}></i>
        <p>{icon.text}</p>
      </div>
    ))
  );

  return(
    <div className="skills-icons">
      { renderIcons() }
    </div>
  );
}

export default Skills;