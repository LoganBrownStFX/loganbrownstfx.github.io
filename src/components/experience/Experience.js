import React from "react";
import BasicCard from "../../layout/BasicCard/BasicCard";
import strings from "../../constants/strings";
import ExperienceBar from "./experienceBar/ExperienceBar";

import useStyles from "./ExperienceStyles";

function Experience() {
  const classes = useStyles();

  return (
    <div className="flex-container-column flex-center">
      <BasicCard>
        <div className={`${classes.root} root`}>
          <span className={`title`}>
            {strings.pages.experience.skills.title}
            <ExperienceBar></ExperienceBar>
          </span>
        </div>
      </BasicCard>
    </div>
  );
}

export default Experience;
