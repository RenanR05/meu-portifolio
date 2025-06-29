import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import brFlag from '../assets/br.png';
// import itFlag from '../assets/it.png';
import usFlag from '../assets/us.png';

const languages = [
  { code: 'pt', label: 'Português', flag: brFlag },
  // { code: 'it', label: 'Italiano', flag: itFlag },
  { code: 'en', label: 'English', flag: usFlag },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="lang-btn">
        <img src={currentLang.flag} alt={currentLang.label} className="lang-flag-icon" />
      </button>
      {isOpen && (
        <ul className="lang-menu">
          {languages.map(lang => (
            <li key={lang.code} onClick={() => handleSelect(lang.code)}>
              <img src={lang.flag} alt={lang.label} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
