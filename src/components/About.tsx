import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-container bd-grid">
        <div className="about-img">
          <img src="./src/assets/RenanR.png" alt="About me" />
        </div>

        <div>
          <h2 className="about-subtitle">I'm Renan</h2>
          <p className="about-text">
            arrumando :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
