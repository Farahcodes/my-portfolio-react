import React from 'react'
import img from '../assets/images/project-3.jpeg'

const Projects = ()=>{
    return(
    <section className="section" id="projects">
    
      <div className="section-title">
        <h2>projects</h2>
        <div className="underline"></div>
      </div>
     
      <div className="section-center">
   
        <article className="project">
       
          <div className="project-img">
            
            <img src={img} className="project-photo"/>
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
            
            <img src={img} className="project-photo"/>
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
    )
}

export default Projects