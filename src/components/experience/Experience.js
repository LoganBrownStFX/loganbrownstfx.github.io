import React, { Component } from "react";
import Skills from "./Skill/Skills";
import Who from "./Who/Who";
import Spinner from "../Common/Spinner";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSkill } from "../../redux/actions/skillActions";

class Experience extends Component {
  componentDidMount() {
    this.props.fetchSkill();
  }
  render() {
    const { skills } = this.props;
    let skillObject;
    if (skills.loading) {
      skillObject = <Spinner />;
    } else {
      skillObject = <Skills skillList={skills} />;
    }
    return(
      <div>
        <div>{skillObject}</div>
        <div><Who/></div>
      </div>
      
    )
  }
}

Experience.propTypes = {
  fetchSkill: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { fetchSkill }
)(Experience);
