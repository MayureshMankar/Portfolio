import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import './App.css';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const SkillBox = lazy(() => import('./components/SkillBox'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.5
    });

    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      skillBoxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-title">Mayuresh Mankar</div>
        <nav className="nav">
          <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button onClick={toggleDarkMode} aria-label="Toggle dark mode">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <motion.section
          className="hero"
          id="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">Hi, I'm Mayuresh Mankar 👋</h1>
          <p className="hero-subtitle">Full Stack Developer | Computer Science Student | Tech Explorer</p>
          <p className="hero-description">
            Crafting seamless, user-friendly web experiences with a passion for clean code and modern design.
            <br />Currently diving deep into DSA, Java, and the MERN Stack, with a growing interest in Machine Learning.
          </p>
          <p className="hero-call-to-action">Let’s collaborate and create something impactful.</p>
        </motion.section>

        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <footer className="footer">
        <p>Built with React, powered by passion.</p>
        <p>&copy; 2025 Mayuresh Mankar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
