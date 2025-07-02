import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
};

const Work: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: t('Project 1'),
      description: t('Description 1'),
      image: 'https://i.postimg.cc/NM0n9bsm/work1.jpg',
      github: 'https://github.com/RenanR05/projeto1',
      demo: 'https://demo1.com',
    },
    {
      title: t('Project 2'),
      description: t('Description 2'),
      image: 'https://i.postimg.cc/tJZmDTVg/work2.jpg',
      github: 'https://github.com/RenanR05/projeto2',
      demo: 'https://demo1.com',
    },
    {
      title: t('Project 3'),
      description: t('Description 3'),
      image: 'https://i.postimg.cc/52LWbPyt/work3.jpg',
      github: 'https://github.com/RenanR05/projeto3',
      demo: 'https://demo1.com',
    },
    {
      title: t('Project 4'),
      description: t('Description 4'),
      image: 'https://i.postimg.cc/fW1wsSCB/work4.jpg',
      github: 'https://github.com/RenanR05/projeto4',
      demo: 'https://demo1.com',
    },
    {
      title: t('Project 5'),
      description: t('Description 5'),
      image: 'https://i.postimg.cc/m2MTgZ6R/work5.jpg',
      github: 'https://github.com/RenanR05/projeto5',
      demo: 'https://demo1.com',
    },
    {
      title: t('Project 6'),
      description: t('Description 6'),
      image: 'https://i.postimg.cc/Qd3h9LR7/work6.jpg',
      github: 'https://github.com/RenanR05/projeto6',
      demo: 'https://demo1.com',
    },
  ];

  return (
    <section className="work section" id="work">
      <h2 className="section-title">{t('Work')}</h2>

      <div className="work-container bd-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="work-img"
            style={{ position: 'relative' }}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="work-overlay">
              <div className="work-overlay-content">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-more">{t('Click for more info')} →</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <i
              className="bx bx-x close-icon"
              onClick={() => setSelectedProject(null)}
            ></i>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div style={{ marginTop: '1rem' }}>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('View on GitHub')}
                </a>
              )}
              {selectedProject.demo && (
                <>
                  {' | '}
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('View Demo')}
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
