import React from 'react';
import './PageStyles.css';

const Skills: React.FC = () => {
  return (
    <div id="main-content-box">
      <div>
        <h1>Skills</h1>
        <p>This is the Skills page.</p>
        <p>Here you can find a list of my skills and expertise.</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    </div>
  )
};

export default Skills;
