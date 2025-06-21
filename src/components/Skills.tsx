
const Skills = () => {
  const skills = [
    { icon: 'bx bxl-c-plus-plus', name: 'C++' },
    { icon: 'bx bxl-javascript', name: 'JS' },
    { icon: 'bx bxl-html5', name: 'HTML' },
    { icon: 'bx bxl-nodejs', name: 'Node' },
    { icon: 'bx bxl-react', name: 'React' }
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      
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