import React from 'react'

const Skills = ()=>{
    return(
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
    )
}

export default Skills