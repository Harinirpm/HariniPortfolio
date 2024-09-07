import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <>
      <div className='project'>
        <h1>Projects</h1>
        <div className='project-cards'>
          <div className='cards'>
          <h2>PS Events</h2>
          <h3>Description</h3>
          <p>
            The PS Events platform facilitates event management where administrators can create and manage events, while students register, participate, and complete levels to earn rewards. Built with React JS, Node JS, Express JS, and MySQL, it integrates seamless event creation and tracking with a robust backend.
          </p>
          <h3>Tech Stack</h3>
          <p>React JS, Node JS, Express JS, MySQL</p>
          <h3>Role</h3>
          <p>Front end Developer</p>
          <button>
            <Link to="https://github.com/DharshiniPandian/PS_Events" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Git Repo</Link>
          </button>
        </div>
        <div className='cards'>
          <h2> Personal Portfolio</h2>
          <h3>Description</h3>
          <p>I developed a responsive portfolio using React.js that highlights my skills in frontend development and UI/UX design. Featuring dynamic components and optimized performance, the portfolio showcases diverse projects, demonstrating my expertise in JavaScript, CSS, and modern React tools. It emphasizes clean code, 
          scalability, and an engaging user experience across all devices.
          </p>
          <h3>Tech Stack</h3>
          <p>React.js</p>
          <h3>Role</h3>
          <p>Front end Developer</p>
          <button>
            <Link to="https://github.com/Harinirpm/HariniPortfolio" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Git Repo</Link>
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Project;
