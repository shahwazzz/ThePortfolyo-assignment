import { useEffect, useState } from "react";
import { activeSkillProgress } from "../utilits";
import useFetch from "../hooks/useFetch";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  const { data } = useFetch();

  useEffect(() => {
    if (data) {
      const skills = data.user.skills
        .filter((skill) => skill.enabled)
        .map((skill) => ({
          name: skill.name,
          percentage: skill.percentage,
          seq: skill.sequence,
        }));

      const sortedSkills = skills.sort((a, b) => a.seq - b.seq);
      setSkillsData(sortedSkills);
    }
  }, [data]);

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div
        className="skillsInner___ progress_inner"
        data-value={skill.percentage}
        data-color="#142eb5"
        key={index}
      >
        <span>
          <span className="label">{skill.name}</span>
          <span className="number">{skill.percentage}%</span>
        </span>
        <div className="background">
          <div className="bar">
            <div className="bar_in" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                {
                  renderSkills(skillsData.slice(0, Math.ceil(skillsData.length / 2)))
                }
              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
              {renderSkills(skillsData.slice(Math.ceil(skillsData.length / 2)))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
