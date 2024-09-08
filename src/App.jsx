
import React from 'react';
import './App.css';
import HorizontalNavbar from './Navbar/HorizontalNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import SideNavbar from './Navbar/SideNavbar'

function App() {
  return (
    <>
      <div className='app'>
        <HorizontalNavbar />
        <SideNavbar />
        <div style={{ marginTop: '70px' }}>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

