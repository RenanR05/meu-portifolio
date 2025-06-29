import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "#home";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            current = link.href;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav-logo">RenanR</a>
        </div>

        <div className={`nav-menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navLinks.map(link => (
              <li className="nav-item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${active === link.href ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
            <li className="nav-item lang-selector-item">
              <LanguageSelector />
            </li>
          </ul>
        </div>

        <div 
          className="nav-toggle" 
          id="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
