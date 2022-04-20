import React from "react";
import img from "../assets/images/webdeveloper.svg";
import socialLinks from "../data/social_links.js";

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>Hey there, i'm Farah.</h1>
          <h4>front-end web developer</h4>
          <a href="#about" className="btn hero-btn">
            about me
          </a>

          <ul className="social-icons hero-icons">
            {socialLinks.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <li key={id}>
                  <a href={url} className="social-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}

            {/* <li>
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
            </li> */}
          </ul>
        </article>
        <article className="hero-img">
          <img src={img} className="hero-photo" alt="Farah" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
