import React from 'react';
import '../css/FontAwesome.css';
import '../css/Skills.css'

function Skills() {
  const classContainer = 'container-skills-icons'
  const icons = [
    {class: 'fab fa-git-alt git', text: 'Git'},
    {class: 'fab fa-linux linux', text: 'Linux' },
    {class: 'fab fa-html5 html', text: 'HTML'},
    {class: 'fab fa-css3-alt css', text: 'CSS'},
    {class: 'fab fa-js js', text: 'JavaScript'},
    {class: 'fab fa-react react', text: 'React.js'},
    {class: 'fab fa-node-js node', text: 'Node.js'},
    {class: 'fas fa-copyright', text: 'C'},
    {class: 'fas fa-copyright cplus', text: 'C++'},
    {class: 'fas fa-database mysql', text: 'MySQL'},
    {class: 'fas fa-database mongodb', text: 'MongoDb'},
  ];
  
  const renderIcons = () => (
    icons.map((icon) => (
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