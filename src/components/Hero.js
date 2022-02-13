import React from 'react'

const Hero = ()=>{
    return(
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

    )
}

export default Hero;
