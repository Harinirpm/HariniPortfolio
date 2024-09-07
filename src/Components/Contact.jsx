import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p8y4nqj', 
        'template_rlnzvif', 
        form.current, {
        publicKey: 'kukP1MCDtoGMS4LE7',
      })
      .then(
        () => {
          console.log('Message send successfully!..');
         alert('Message send successfully!');
          window.location.reload();
        },
        (error) => {
          console.log('Message send failed...', error.text);
          alert('Message sending failed. Please try again.');
        },
      );
  };
  return (
    <>
    <div className='contact'>
      <h1>Let's Connect</h1>
      <p>If you are interested in my skills and services, feel free to contact me. 
        I would be happy to discuss with you and share values that benefit each other!</p>
      <div className='form-container'>
      <form htmlFor='true' ref={form} onSubmit={sendEmail}>
      <div className='form-group'>
       <label>Name</label>
        <input 
        type='text'
         id='name' 
         name='user_name'
         placeholder='Enter your Name' 
         required
         />
        </div>
        <div className='form-group'>
        <label>Email</label>
        <input 
          type='email' 
          id='email' 
          name='user_email'
          placeholder='Enter your Email'
          required 
          /> 
        </div>
        <div className='form-group'>
        <label>Message</label>
        <textarea id='message'
         name='message' 
        placeholder='Enter your Message'
        rows='5' required></textarea>
      </div>

      {/* <button type='submit'
      value={Send}>Submit</button> */}
      <input type="submit" value="Send" className='button'/>
      </form>
      </div>
      <footer className='footer'>
          <p>Created by Harini | 2024</p>
        </footer>
    </div>
    </>
  )
}

export default Contact
