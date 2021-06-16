import React, { useState } from 'react';
import { Projects, icons } from '../Data'
import MyContext from './MyContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [projectById, setProjectById] = useState({});
  const [projectData] = useState(Projects);
  const [iconsData] = useState(icons);

  const context = {
    projectById,
    setProjectById,
    projectData,
    iconsData,
  };

  return (
    <MyContext.Provider value={ context }>
    {children}
  </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;