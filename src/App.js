import React from 'react';
import Navbar from './components/Navbar';
function App(){

    return(
  <main>
    <Navbar/>


    <aside className="sidebar" id="sidebar">
      <div>
        <button className="close-btn" id="close-btn">
          <i className="fas fa-times"></i>
        </button>
       
        <ul className="sidebar-links">
          <li>
            <a href="#about" className="sidebar-link">about</a>
          </li>
          <li>
            <a href="#skills" className="sidebar-link">skills</a>
          </li>
          <li>
            <a href="#projects" className="sidebar-link">projects</a>
          </li>
        </ul>
        
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
      </div>
    </aside>

    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm Farah</h1>
          <h4>front-end web developer</h4>
          <a href="#about" className="btn hero-btn">about me</a>
        
          <ul className="social-icons hero-icons">
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
        </article>
        <article className="hero-img">
          <img src="./images/webdeveloper.svg" className="hero-photo" alt="Farah" />
        </article>
      </div>
    </header>

    <section className="section about" id="about">
      <div className="section-center about-center">
    
        <article className="about-img">
          <img src="./images/programmer.svg" className="about-photo" alt="about img" />
        </article>
      
        <article className="about-info">
          
          <div className="section-title about-title">
            <h2>about me</h2>
            <div className="underline"></div>
          </div>
         
          <p>
            I am a passionate introvert who loves building things with code.
            My background in both Finance and Data Analytics allowed
            me to sharpen my attention to details and ability to adapt and learn
            about new products very quickly.
          </p>
          <p>
            With strong numerical reasoning capacity. Excellent analytical & problem solving skills. Fast learner, highly
            performance motivated and able to work under pressure. I thrive in diverse and multicultural environment.
          </p>
          <p>
            When I'm not learning to code, I enjoy cooking and doing Yoga. I also have a passion for Spain: the colors, food, architecture, people and the Spanish lifestyle!
          </p>
        </article>
      </div>
    </section>



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