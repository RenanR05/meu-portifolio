import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer-title">RenanR</p>

      <div className="footer-social">
        <a href="https://www.linkedin.com/in/renan-regis-507114329/" className="footer-icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://www.instagram.com/renanr3gis" className="footer-icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://github.com/RenanR05" className="footer-icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>

      <p>&#169; 2025 {t('FooterRights')}</p>
    </footer>
  );
};

export default Footer;
