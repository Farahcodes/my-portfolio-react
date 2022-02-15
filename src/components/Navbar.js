import React from 'react'
import logo from '../assets/images/smallerlogo.svg'
import links from '../data/nav_links.js'

const Navbar =()=>{
    return(
    <nav className="nav" id="nav">
      <div className="nav-center">
      
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="nav logo" />
          <button className="nav-btn" id="nav-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {links.map((link)=>{
          const{id,path,text} =link;
          return (
              <ul className='nav-links'> 
              <li key={id} >
                <a href={path}>{text}</a>
              </li>
              </ul>
          )
        })}
        {/* <ul className="nav-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul> */}
      </div>
    </nav>  
    )
}

export default Navbar