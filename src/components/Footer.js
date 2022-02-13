import React from 'react'

const Footer = ()=>{
    return (
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
    )
}

export default Footer