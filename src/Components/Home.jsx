import React from 'react'
import './Home.css';
import Profile from "../Components/My_Profile.jpeg";
import Resume from "../Components/Harini_M_Resume.pdf";
import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
function Home() {
  return (
    <>
    <div className='home'>
      {/* <h1>Home</h1> */}
      <div className='profile-container'>
        <div className='text'>
        <h3>Hi   There!..</h3>
        <h2>I'm Harini M</h2>
        <h4>Artificial Intelligence and Data Science Student!</h4>
        <div className='media'>
    <Link to='https://www.linkedin.com/in/harini-murali-bitsathy/' >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0adDoUGWVD3jGzfT8grK5Uhw0dLXSk3OWJwZaXI-t95suRZQ-wPF7-Az6KurXDVktV4&usqp=CAU' alt='LinkedIn' className='personal-links'/>
    </Link> 
    <Link to='https://github.com/Harinirpm'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnn_FLBfy9aUkcxjAnbOIwnRt1Da8obGqo0w&s' alt='GitHub' className='personal-links' />
    </Link>
    <Link to='https://leetcode.com/u/harinimr/'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png' alt='LeetCode' className='personal-links'/>
     </Link>
     <Link to='https://www.geeksforgeeks.org/user/harinirano0yb/'>
    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20220123013311/gfg-200x200.png' alt='HackerRank' className='personal-links'/>
     </Link>
     <Link to='https://www.hackerrank.com/profile/harinirangammal4'>
    <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png' alt='HackerRank' className='personal-links'/>
     </Link>
     <div className='resume-download'>
      <a href={Resume} download={"Harini_M_Resume.pdf"} className='download-button'>Download Resume</a>
     </div>
    </div>
    
    </div>
      <img src={Profile} alt='myprofile' className='home-profile' />
      </div>

    </div>
    
    </>
  )
}

export default Home
