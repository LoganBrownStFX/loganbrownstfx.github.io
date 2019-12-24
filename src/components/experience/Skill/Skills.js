import React, { useEffect } from "react";
import strings from "../../../constants/strings";
import SkillBar from "./skillBar/SkillBar";
import { fetchSkill } from "../../../redux/actions/skillActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useStyles from "./SkillsStyles";
import Spinner from "../../Common/Spinner";

function Skills(props) {

  useEffect(()=>{
    props.fetchSkill();
  }, [])


  let  skillList  = props.skills;
  let skillObj;
  if(skillList.loading){
    skillObj = <Spinner/>
  }else{
    skillObj = skillList.skills.map(skill => (
      <SkillBar
        key={skill.skillType}
        type={skill.skillType}
        level={skill.level}
      />
    ));
  }
  

  const classes = useStyles();

  return (
    <div className="flex-container-column flex-center">
      <div
        className={`${classes.root} root flex-conatainer-column flex-center`}
      >
        <span className={`skills-title`}>
          {strings.pages.experience.skills.title}
        </span>
        <span className="skills-subtitle">
          {strings.pages.experience.skills.subtitle}
        </span>
        <div className="skill-bar-list-container flex-container-row">
          <div className="skill-bar-list">
            {skillObj[0]}
            {skillObj[2]}
            {skillObj[4]}
          </div>
          <div className="skill-bar-list">
            {skillObj[1]}
            {skillObj[3]}
            {skillObj[5]}
          </div>
        </div>
      </div>
    </div>
  );
}
Skills.propTypes = {
  fetchSkill: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  skills: state.skills
})

export default connect(mapStateToProps,{ fetchSkill })(Skills);
