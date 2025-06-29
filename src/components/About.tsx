import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <h2 className="section-title">{t('About')}</h2>

      <div className="about-container bd-grid">
        <div className="about-img">
          <img src="./src/assets/RenanR.png" alt="About me" />
        </div>

        <div>
          <h2 className="about-subtitle">{t("I'm")} Renan</h2>
          <p className="about-text">
            {t("AboutText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
