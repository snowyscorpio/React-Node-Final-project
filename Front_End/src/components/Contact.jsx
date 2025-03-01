import React, { useState } from 'react';
import Title from './Title';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import pinterest from '../assets/images/pinterest.png';



function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.first_name} ${formData.last_name}\nEmail: ${formData.email}\nPhone: ${formData.phone_number}\nMessage: ${formData.message}`);
  };

  return (
    <div className="main">
      <Title />

        <h2>Contact Us</h2>

      <div className="contact">

        <p className="p-contact-upper">Hello Beautiful Thing, Here You Can Contact Us</p>

        <div className='social-links'>
          <p className="p-contact-upper">Our Socials</p>
          <nav>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" className="social-logo" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" className="social-logo" />
                </a>
              </li>

              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" className="social-logo" />
                </a>
              </li>

              <li>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <img src={pinterest} alt="pinterest" className="social-logo" />
                </a>
              </li>
            </ul>
          </nav>


        </div>

        <form onSubmit={handleSubmit}>
          <p className="p-contact-upper">Send Us A Message</p>
          <p className="p-contact">Full Name</p>
          <input type="text" name="full_name" className="input-contact" value={formData.full_name} onChange={handleChange} />


          <p className="p-contact">Email</p>
          <input type="email" name="email" className="input-contact" value={formData.email} onChange={handleChange} />

          <p className="p-contact">Phone Number</p>
          <input type="tel" name="phone_number" required maxLength="10" className="input-contact" value={formData.phone_number} onChange={handleChange} />

          <p className="p-contact">Message Us</p>
          <textarea rows="4" cols="50" name="message" className="textarea-contact" placeholder="Anything you wanna say..." value={formData.message} onChange={handleChange}></textarea>

          <div className="button-container">
            <button type="submit" className="button-contact">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;