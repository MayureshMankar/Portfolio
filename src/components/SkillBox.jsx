import React from 'react';

const SkillBox = ({ imgSrc, altText, text }) => {
  console.log(`Rendering SkillBox with imgSrc: ${imgSrc}`);
  return (
    <div className="skill-box">
      <img src={imgSrc} alt={altText} />
      <p>{text}</p>
    </div>
  );
};

export default SkillBox;
