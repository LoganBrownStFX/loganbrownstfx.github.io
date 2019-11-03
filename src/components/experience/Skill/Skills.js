import React from "react";
import strings from "../../../constants/strings";
import SkillBar from "./skillBar/SkillBar";

import useStyles from "./SkillsStyles";

function Skills() {
  let skillList = [
    {
      type: "Java",
      level: "80%"
    },
    {
      type: "Node/Express",
      level: "85%"
    },
    {
      type: "React",
      level: "90%"
    },
    {
      type: "AngularJS",
      level: "85%"
    },
    {
      type: "C++",
      level: "85%"
    },
    {
      type: "Artificial Intelligence",
      level: "92%"
    }
  ];

  let skills = skillList.map(skill => (
    <SkillBar key={skill.type} type={skill.type} level={skill.level} />
  ));
  const classes = useStyles();

  return (
    <div className="flex-container-column flex-center">
      {/* <BasicCard> */}
      <div
        className={`${classes.root} root flex-conatainer-column flex-center`}
      >
        <span className={`skills-title`}>
          {strings.pages.experience.skills.title}
        </span>
        <span className="skills-subtitle">
          {strings.pages.experience.skills.subtitle}
        </span>
        <div className="skill-bar-list">{skills}</div>
      </div>
      {/* </BasicCard> */}
    </div>
  );
}

export default Skills;
