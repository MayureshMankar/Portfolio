import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Shoe Brand E-Commerce Site',
      description: 'A complete shopping experience featuring product pages, login/logout, cart, order placement, and MongoDB integration.',
      image: 'src/assets/Screenshot 2025-04-12 183902.png',
      github: 'https://github.com/yourusername/shoe-brand-ecommerce',
      demo: 'https://www.adidas.co.in/',
    },
    {
      title: 'Shreedevi Engineers Industrial Website',
      description: 'Developed an official online presence for a real-world surface grinding company. Includes product listings, dynamic form submissions, certificate uploads, and client interaction modules.',
      image: 'src/assets/Screenshot 2025-04-12 183609.png',
      github: 'https://github.com/yourusername/shreedevi-engineers',
      demo: 'https://www.srideviengineers.com/',
    },
    {
      title: 'Checkout Manager System',
      description: 'A CRUD-based mini-app where users can sign up, add/delete items to a cart, place orders, and view history. Uses secure backend logic with Node.js and MongoDB.',
      image: 'src/assets/Screenshot 2025-04-12 185629.png',
      github: 'https://github.com/yourusername/checkout-manager',
      demo: 'https://www.godaddy.com/',
    },
    {
      title: 'Portfolio Website',
      description: 'A sleek, animated single-page portfolio built with React & Framer Motion to showcase my journey, skills, and projects in an engaging way.',
      image: 'src/assets/Screenshot 2025-04-12 190007.png',
      github: 'https://github.com/yourusername/portfolio-website',
      demo: 'https://your-portfolio-website.com',
    },
  ];

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
