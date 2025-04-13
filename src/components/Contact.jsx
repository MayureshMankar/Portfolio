import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.css'; // Ensure you have a separate CSS file for the contact section
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="contact-title"
    >
      <h2 className="section-title" id="contact-title">Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail} aria-labelledby="contact-form-title">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" name="name" className="form-input" required aria-required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" id="email" name="email" className="form-input" required aria-required="true" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea id="message" name="message" className="form-input" required aria-required="true"></textarea>
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
        <div className="contact-info">
          <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> mankarmayuresh2045@gmail.com</p>
          <p><FaLinkedin className="contact-icon" /> <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mankarmayuresh" target="_blank" rel="noopener noreferrer">linkedin.com/in/mankarmayuresh</a></p>
          <p><FaGithub className="contact-icon" /> <strong>GitHub:</strong> <a href="https://github.com/mankarmayuresh" target="_blank" rel="noopener noreferrer">github.com/mankarmayuresh</a></p>
          <p><FaGlobe className="contact-icon" /> <strong>Portfolio:</strong> Coming soon...</p>
          <p>Whether you're looking for a collaborator, a freelance developer, or just want to chat about tech — I’d love to hear from you!</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
