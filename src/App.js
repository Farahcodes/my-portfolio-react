import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
function App(){

    return(
  <main>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <About/>










    <section className="section skills" id="skills">
      
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>

        <div className="section-center skills-center">
  
          <article className="single-skill">
            <span className="skill-icon">
              <i className="fab fa-html5"></i>
            </span>
            <h4>HTML&CSS</h4>
            <p>Able to convert Mockup to responsive HTML and CSS writing maintainable CSS code.</p>
          </article>

          <article className="single-skill">
            <span className="skill-icon">
              <i className="fab fa-js"></i>
            </span>
            <h4>JavaScript</h4>
            <p>Able to create dynamic web pages with modern ES6 features.</p>
          </article>

          <article className="single-skill">
            <span className="skill-icon">
              <i className="fab fa-react"></i>
            </span>
            <h4>React</h4>
            <p>Able to build a modern component-based application using JSX.</p>
          </article>
         

        </div>
    </section>
  

 
    <section className="section" id="projects">
    
      <div className="section-title">
        <h2>projects</h2>
        <div className="underline"></div>
      </div>
     
      <div className="section-center">
   
        <article className="project">
       
          <div className="project-img">
            
            <img src="./images/project-3.jpeg" className="project-photo"/>
          </div>
         
          <div className="project-info">
            <span className="project-number">01.</span>
            <h3>Project title</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt eos. Nemo, quasi pariatur consequatur itaque laudantium exercitationem dicta reprehenderit.
            </p>
            <div className="project-stack">
              <span>html</span>
              <span>css</span>
              <span>javscript</span>
            </div>
            <div className="project-links">
            
              <a href="#" className="project-link">
                <i className="fab fa-github-square"></i>
              </a>
              
              <a href="#" className="project-link">
                <i className="fas fa-share-square"></i>
              </a>
            </div>
          </div>
        </article>
    
        <article className="project">
        
          <div className="project-img">
            
            <img src="./images/project-3.jpeg" className="project-photo"/>
          </div>
          
          <div className="project-info">
            <span className="project-number">01.</span>
            <h3>Project title</h3>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt eos. Nemo, quasi pariatur consequatur itaque laudantium exercitationem dicta reprehenderit.
            </p>
            <div className="project-stack">
              <span>html</span>
              <span>css</span>
              <span>javscript</span>
            </div>
            <div className="project-links">
             
              <a href="#" className="project-link">
                <i className="fab fa-github-square"></i>
              </a>
           
              <a href="#" className="project-link">
                <i className="fas fa-share-square"></i>
              </a>
            </div>
          </div>
        </article>
        

      </div>
    </section>
    

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