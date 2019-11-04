import React, { Component } from "react";
import Skills from "./Skill/Skills";
import Spinner from "../Common/Spinner";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getSkill } from "../../redux/actions/skillActions";

class Experience extends Component {
  componentDidMount() {
    this.props.getSkill();
  }
  render() {
    const { skills } = this.props;
    let skillObject;
    if (skills.loading) {
      skillObject = <Spinner />;
    } else {
      skillObject = <Skills skillList={skills} />;
    }
    return <div>{skillObject}</div>;
  }
}

Experience.propTypes = {
  getSkill: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkill }
)(Experience);
