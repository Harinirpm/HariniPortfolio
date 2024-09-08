import React, { useState } from 'react';
import './SideNavbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io'; 

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='side-nav'>
     
      <div 
        className={`menu-icon ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleNavbar}
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        <IoMdMenu style={{ color: 'white' }} size={30} />
      </div>

    
      <div id="sidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleNavbar}>
          <IoMdClose style={{ color: 'white' }} size={36} />
        </span>
        <ul>
          <li><ScrollLink to="home" smooth={true} duration={500} className='link'>Home</ScrollLink></li>
       <li><ScrollLink to="about" smooth={true} duration={500} className='link'>About</ScrollLink></li>
        <li><ScrollLink to="skills" smooth={true} duration={500} className='link'>Skills</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} className='link'>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className='link'>Contact</ScrollLink></li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
