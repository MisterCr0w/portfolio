import React from 'react';
import logo from './logo.svg';
// Import BrowserRouter, Route, and Link components
import { BrowserRouter, Router, Link} from 'react-router-dom';
import Projects from './projects.js';
import Articles from './articles.js';
import About from './about.js';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">

      // Set up Router
      <Route exact path="/" component={Projects} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />

      <div className="navigation">
        <img src={logo} className="logo-image" alt="Logo Image" />
        <div className="navigation-sub">

          // Set up Links
          <Link to="/" className="item">Projects</Link>
          <Link to="/articles" className="item">Articles</Link>
          <Link to="/about" className="item">About</Link>

        </div>
      </div>
    </div>
   </BrowserRouter> 
  );
}

export default App;
