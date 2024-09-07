import React from 'react'
import './About.css'
import Image from '../Components/image.jpg'
function About() {
  return (
    <>
    <div className='about'>
      <h1>
       Know who am I
      </h1>
      <div className="underline-container">
      <div className="underline first-line"></div>
      <div className="underline second-line"></div>
    </div>
      <div className='about-content'>
        <img src={Image} alt='image' className='image'/>
        
        <p> Hello! I'm Harini M, currently pursuing my pre-final year at 
          Bannari Amman Institute of Technology with a focus on Artificial Intelligence and Data Science. 
          I'm deeply passionate about web development, with a strong foundation in C and Java, complemented 
          by expertise in HTML, CSS, JavaScript, and React.js.My drive to create visually appealing and responsive websites is matched by a constant desire 
          to push the boundaries of what I can achieve in this fast-evolving field. I thrive on transforming 
          ideas into seamless digital experiences that are not only user-friendly but also innovative.
          <br></br>
          I am always eager to learn and expand my technical skills, seeking opportunities to 
          apply my creativity to solve real-world challenges. Whether it's diving into new 
          technologies or tackling complex coding problems, I approach each task with enthusiasm 
          and a commitment to excellence. My ultimate goal is to contribute meaningfully to the tech 
          industry and play a role in shaping the future of our digital landscape.
           </p>
      </div>
      <div className="underline hori-line"></div>

    </div>
    </>
  )
}

export default About
