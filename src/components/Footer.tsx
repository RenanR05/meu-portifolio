import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-title">RenanR</p>

      <div className="footer-social">
        <a href="#" className="footer-icon">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="#" className="footer-icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="#" className="footer-icon">
          <i className='bx bxl-twitter'></i>
        </a>
      </div>

      <p>&#169; 2025 Copyright all rights reserved</p>
    </footer>
  );
};

export default Footer;
