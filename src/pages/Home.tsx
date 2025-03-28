import React from 'react';
import './PageStyles.css';


const Home: React.FC = () => {
    return (
      <div id="main-content-box">
        <div className="typewriter">
            <h1>Welcome to My Portfolio</h1>
        </div>
        <div id="home-content">
            <p id="home-paragraph">Hi, I'm Noah, a passionate and skilled full-stack web developer with a strong foundation in both front-end and back-end technologies. With experience building responsive, user-friendly websites and dynamic applications, I enjoy solving complex problems and bringing creative solutions to life.</p>
            <div id="image-container"></div>
        </div>
      </div>
    );
  };
export default Home;
