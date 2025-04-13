import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Ensure you have a separate CSS file for the about section

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="about-title"
    >
      <h2 className="section-title" id="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-photo">
          <img src="src/assets/Picsart_25-04-13_00-58-30-642.jpg" alt="Mayuresh Mankar" className="profile-image" />
        </div>
        <div className="about-content">
          <p>
            Hi, I'm Mayuresh Mankar, a dedicated and ambitious Computer Science undergraduate with a strong foundation in software development,
            data structures, and web technologies. My journey started with curiosity, and it’s now fueled by a mission to solve
            real-world problems through tech.
          </p>
          <p>
            From building dynamic full-stack apps to experimenting with AI models, I love to turn ideas into scalable and efficient
            solutions. I believe that technology should not only work — it should feel right, look sharp, and perform reliably.
          </p>
          <p>
            Outside the screen, I invest time in fitness, kickboxing for self-discipline, and personal branding. Whether it's launching
            a shoe brand or planning a clothing line, I enjoy bringing vision to life.
          </p>
          <button className="about-cta" onClick={() => window.location.href = '#contact'}>
            Get in Touch
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
