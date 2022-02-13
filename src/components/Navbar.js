import React from 'react'

const Navbar =()=>{
    return(
    <nav className="nav" id="nav">
      <div className="nav-center">
      
        <div className="nav-header">
          <img src="./images/smallerlogo.svg" className="nav-logo" alt="nav logo" />
          <button className="nav-btn" id="nav-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul>
      </div>
    </nav>  
    )
}

export default Navbar