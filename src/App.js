import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/Menu" component={Menu} />
      <Route path="/About" component={About} />
    </BrowserRouter>
  );
};

export default App;
