import React from 'react'
import links from '../data/nav_links.js'
import socialLinks from '../data/social_links.js'
import { useGlobalContext } from './context'

const Sidebar =()=>{
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return(
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`} id="sidebar">
      <div>
        <button className="close-btn" onClick={closeSidebar} id="close-btn">
          <i className="fas fa-times"></i>
        </button>
       
        <ul className="sidebar-links">
          {links.map((link)=>{
            const{id,path,text} =link;
            return (
              
                <li key={id} >
                  <a href={path} className="sidebar-link">{text}</a>
                </li>   
            )
          })}
          {/* <li>
            <a href="#about" className="sidebar-link">about</a>
          </li>
          <li>
            <a href="#skills" className="sidebar-link">skills</a>
          </li>
          <li>
            <a href="#projects" className="sidebar-link">projects</a>
          </li> */}
        </ul>
        
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
      </div>
    </aside>
    )
}

export default Sidebar;