import React from 'react'

const Sidebar =()=>{
    return(
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
    )
}

export default Sidebar;