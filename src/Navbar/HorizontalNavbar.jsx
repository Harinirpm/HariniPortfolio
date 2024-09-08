import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './HorizontalNavbar.css';

function HorizontalNavbar() {
  return (
    <nav className='topNav'>
      <h1 className='logo'>Harini's Portfolio</h1>
      <div className='navLinks'>
        <ScrollLink to="home" smooth={true} duration={500} className='link'>Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className='link'>About</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} className='link'>Skills</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className='link'>Projects</ScrollLink>
        {/* <ScrollLink to="contact" smooth={true} duration={500} className='link'>Contact</ScrollLink> */}
      </div>
    </nav>
  );
}

export default HorizontalNavbar;
