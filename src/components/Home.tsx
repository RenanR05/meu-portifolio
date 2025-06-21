import React from 'react';
import TypingEffect from './TypingEffect';

const Home: React.FC = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home-data">
        <h1 className="home-title">
          Hi,<br />
          I'm <span className="home-title-color">RenanR</span><br />
          <span className="highlight">
            <TypingEffect words={
                [
                  "Web Designer", 
                  "Front-End Developer",
                  "AWS lover",
                  "Freelancer",
                  "React Developer",
                  "JavaScript lover",
                ]
              } />
          </span>
        </h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className="home-img">
        <img src="./src/assets/FotoPrincipal.png" alt="Profile" />
      </div>

      <div className="home-social">
        <a href="https://www.linkedin.com/in/renan-regis-507114329/" className="home-social-icon"><i className='bx bxl-linkedin'></i></a>
        <a href="https://www.instagram.com/renanr3gis" className="home-social-icon"><i className='bx bxl-instagram'></i></a>
        <a href="https://github.com/RenanR05" className="home-social-icon"><i className='bx bxl-github'></i></a>
      </div>
    </section>
  );
};

export default Home;