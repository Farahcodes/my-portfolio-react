import React,{useEffect,useState} from 'react'
import { getProjects } from '../contentful'
import img from '../assets/images/project-3.jpeg'

const Projects = ()=>{
  // state value setup
  const[projects,setProjects] = useState([]);

  useEffect(()=>{
  //fetching data
  getProjects().then((projects)=>{
    setProjects(projects);
  });
  },[])
    return(
    <section className="section" id="projects">
    
      <div className="section-title">
        <h2>projects</h2>
        <div className="underline"></div>
      </div>
     
      <div className="section-center">

      {projects.map((project,index)=>{
        const{id,img,title,description,github,completeProject,stack}= project;
        return(
          <article className="project" key={id}>
            <div className="project-img">
              <img src={img} className='project-photo' alt={title} />
            </div>

            <div className="project-info">
              <span className="project-number">0{index+1}.</span>
              <h3>{title}</h3>
              <p className="project-desc">{description}</p>
            </div>
          </article>
        )
      })}

        

      </div>
    </section>
    )
}

export default Projects