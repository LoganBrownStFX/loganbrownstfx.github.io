import React, { Component } from "react";
import Skills from "./Skill/Skills";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getSkill } from "../../redux/actions/skillActions";

class Experience extends Component {
  componentDidMount() {
    this.props.getSkill();
  }
  render() {
    const { skills } = this.props;
    console.log(skills);
    return (
      <div>
        <Skills />
      </div>
    );
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
