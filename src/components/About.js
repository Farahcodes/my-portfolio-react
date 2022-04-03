import React from 'react';
import img from '../assets/images/programmer.svg'

const About = ()=>{
    return (
    <section className="section about" id="about"> 
      <div className="section-center about-center">
    
        <article className="about-img">
          <img src={img} className="about-photo" alt="about img" />
        </article>
      
        <article className="about-info">
          
          <div className="section-title about-title">
            <h2>about me</h2>
            <div className="underline"></div>
          </div>
         
          <p>
            I am a passionate self-taught developer who loves building things with code.
            My background in both Finance and Data Analytics allowed
            me to sharpen my attention to details and ability to adapt and learn
            about new products very quickly.
          </p>
          <p>
            Good with numbers. Excellent analytical & problem solving skills. Fast learner, highly
            performance motivated and able to work under pressure. I thrive in diverse and multicultural environments.
          </p>
          <p>
            When I'm not learning to code, I enjoy cooking and doing Yoga. I also have a passion for Spain: the colors, food, architecture, people and the Spanish lifestyle!
          </p>
        </article>
      </div>
    </section> 
    )
}

export default About