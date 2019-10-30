import React from "react";
import useStyles from "./ExperienceBarStyles.js";

function ExperienceBar(props) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} flex-container-column`}>
      <div className={`label-container flex-container-row`}>
        <span className={`label`}>Java</span>
        <span className={`value`}>80%</span>
      </div>
      <div className={`bar-container`}>
        <div className={`value-bar`}></div>
        <div className={`bar-remainder`}></div>
      </div>
    </div>
  );
}

export default ExperienceBar;
