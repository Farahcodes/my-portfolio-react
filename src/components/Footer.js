import React from 'react'
import socialLinks from '../data/social_links.js'

const Footer = ()=>{
    return (
    <footer className="footer">
     
      <ul className="social-icons">

        {
          socialLinks.map((socialLink)=>{
            const{id,url,icon} = socialLink;
            return(
              <li key={id}>
                <a href={url} className='social-icon'>
                  <i className={icon}></i>
                </a>
                
              </li>
            )
          })
        }
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

      <p>&copy; <span id="date"></span> FarahCodes. all rights reserved</p>
    </footer>
    )
}

export default Footer