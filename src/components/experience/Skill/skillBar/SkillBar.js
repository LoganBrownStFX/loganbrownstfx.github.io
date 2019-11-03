import React, { useRef, useEffect } from "react";
import useStyles from "./SkillBarStyles";

function ExperienceBar(props) {
  const classes = useStyles();
  var self = useRef();

  useEffect(componentDidMount, []);

  function componentDidMount() {
    self.current.querySelector(".value-bar").style.width = props.level;
  }

  return (
    <div className={`${classes.root} flex-container-column`} ref={self}>
      <div className={`label-container flex-container-row`}>
        <span className={`label`}>{props.type}</span>
        <span className={`value`}>{props.level}</span>
      </div>
      <div className={`bar-container`}>
        <div className={`value-bar`}></div>
        <div className={`bar-remainder`}></div>
      </div>
    </div>
  );
}

export default ExperienceBar;
