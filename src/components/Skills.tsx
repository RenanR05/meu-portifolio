import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: 'bx bxl-react', name: 'React' },
    { icon: 'bx bxl-javascript', name: 'JS' },
    { icon: 'bx bxl-nodejs', name: 'Node' },
    { icon: 'bx bxl-aws', name: 'AWS' },
    { icon: 'bx bxl-html5', name: 'HTML' },
    { icon: 'bx bxl-git', name: 'GIT' },
    { icon: 'bx bxl-mongodb', name: 'MONGODB' },
    { icon: 'bx bxl-c-plus-plus', name: 'C++' },
    { icon: 'bx bxl-postgresql', name: 'POSTGRESQL' },
    { icon: 'bx bxl-java', name: 'Java' },
    { icon: 'bx bxl-php', name: 'PHP' },
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">{t('Skills')}</h2>

      <div className="skills__container">
        {skills.map((skill, index) => (
          <div key={index} className="skill__item">
            <i className={`${skill.icon} skill__icon`}></i>
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
