import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  console.log('Skills component rendered');

  const skillsData = [
    { imgSrc: 'src/assets/html-5.png', altText: 'HTML5 Logo', text: 'HTML5' },
    { imgSrc: 'src/assets/css-3.png', altText: 'CSS3 Logo', text: 'CSS3' },
    { imgSrc: 'src/assets/js.png', altText: 'JavaScript Logo', text: 'JavaScript (ES6+)' },
    { imgSrc: 'src/assets/science.png', altText: 'React Logo', text: 'React.js' },
    { imgSrc: 'src/assets/icons8-vite-144.png', altText: 'Vite Logo', text: 'Vite' },
    { imgSrc: 'src/assets/node-js.png', altText: 'Node.js Logo', text: 'Node.js' },
    { imgSrc: 'src/assets/icons8-express-js-128.png', altText: 'Express.js Logo', text: 'Express.js' },
    { imgSrc: 'src/assets/api.png', altText: 'REST APIs Logo', text: 'REST APIs' },
    { imgSrc: 'src/assets/icons8-mongodb-96.png', altText: 'MongoDB Logo', text: 'MongoDB (Atlas)' },
    { imgSrc: 'src/assets/mysql.png', altText: 'MySQL Logo', text: 'MySQL' },
    { imgSrc: '/assets/java-logo.png', altText: 'Java Logo', text: 'Java (DSA + OOP)' },
    { imgSrc: '/assets/plsql-logo.png', altText: 'PL/SQL Logo', text: 'PL/SQL' },
    { imgSrc: '/assets/dbms-logo.png', altText: 'Advanced DBMS Logo', text: 'Advanced DBMS' },
    { imgSrc: '/assets/oop-logo.png', altText: 'OOP Logo', text: 'Object-Oriented Programming' },
    { imgSrc: '/assets/git-logo.png', altText: 'Git Logo', text: 'Git' },
    { imgSrc: '/assets/github-logo.png', altText: 'GitHub Logo', text: 'GitHub' },
    { imgSrc: '/assets/postman-logo.png', altText: 'Postman Logo', text: 'Postman' },
    { imgSrc: '/assets/vscode-logo.png', altText: 'VS Code Logo', text: 'VS Code' },
    { imgSrc: '/assets/vercel-logo.png', altText: 'Vercel Logo', text: 'Vercel' },
    { imgSrc: '/assets/netlify-logo.png', altText: 'Netlify Logo', text: 'Netlify' },
    { imgSrc: '/assets/firebase-logo.png', altText: 'Firebase Logo', text: 'Firebase (basics)' },
    { imgSrc: '/assets/figma-logo.png', altText: 'Figma Logo', text: 'Figma' },
    { imgSrc: '/assets/team-logo.png', altText: 'Team Collaboration Logo', text: 'Team Collaboration' },
    { imgSrc: '/assets/critical-thinking-logo.png', altText: 'Critical Thinking Logo', text: 'Critical Thinking' },
    { imgSrc: '/assets/problem-solving-logo.png', altText: 'Problem Solving Logo', text: 'Problem Solving' },
    { imgSrc: '/assets/fast-learner-logo.png', altText: 'Fast Learner Logo', text: 'Fast Learner' },
    { imgSrc: '/assets/entrepreneurial-logo.png', altText: 'Entrepreneurial Mindset Logo', text: 'Entrepreneurial Mindset' },
  ];

  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="skills-title"
    >
      <h2 className="section-title" id="skills-title">Tech Stack & Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-box" tabIndex="0" aria-label={skill.text}>
            <img src={skill.imgSrc} alt={skill.altText} />
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
