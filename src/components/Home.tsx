import React from 'react';
import TypingEffect from './TypingEffect';
import { useTranslation } from 'react-i18next';
import ProfileImage from '../assets/FotoPrincipal.png';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const typingWords = [
    'Web Designer',
    'Front-End Developer',
    'AWS lover',
    'Freelancer',
    'React Developer',
    'JavaScript lover',
  ];

  return (
    <section className="home bd-grid" id="home">
      <div className="home-data">
        <h1 className="home-title">
          {t('Hi')},<br />
          {t("I'm")} <span className="home-title-color">RenanR</span><br />
          <span className="highlight">
            <TypingEffect words={typingWords} />
          </span>
        </h1>
        <a href="#contact" className="button">{t('Contact')}</a>
      </div>

      <div className="home-img">
        <img src={ProfileImage} alt="Profile" />
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
