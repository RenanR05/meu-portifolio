import React from 'react';

const Work: React.FC = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work-container bd-grid">
        <div className="work-img">
          <img src="https://i.postimg.cc/NM0n9bsm/work1.jpg" alt="Project 1" />
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/tJZmDTVg/work2.jpg" alt="Project 2" />
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/52LWbPyt/work3.jpg" alt="Project 3" />
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/fW1wsSCB/work4.jpg" alt="Project 4" />
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/m2MTgZ6R/work5.jpg" alt="Project 5" />
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/Qd3h9LR7/work6.jpg" alt="Project 6" />
        </div>
      </div>
    </section>
  );
};

export default Work;
