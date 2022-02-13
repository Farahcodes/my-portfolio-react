import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App(){

    return(
  <main>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>











  

 

    

    <footer className="footer">
     
      <ul className="social-icons">
        <li>
          <a href="https://www.linkedin.com/in/farah-fournat/" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Farahcodes" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/codingfarah" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <p>&copy; <span id="date"></span> FarahCodes. all rights reserved</p>
    </footer>
    <script src="./js/app.js"></script>
    </main>
    )
}
export default App