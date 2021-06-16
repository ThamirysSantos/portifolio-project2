import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Menu';
import Menu from './pages/Menu';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/ProjectDetails/:id" component={ProjectDetails} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
