import React from 'react';
import ReactDOM from 'react-dom';
//react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const ReactRouter = ()=>{
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/skills'>
          <Skills/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

export default ReactRouter;