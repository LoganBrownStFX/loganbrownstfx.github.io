import React, { Component } from "react";
import Skills from "./Skill/Skills";
import Who from "./Who/Who";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSkill } from "../../redux/actions/skillActions";

class Experience extends Component {
  componentDidMount() {
    this.props.fetchSkill();
  }
  render() {
    
    return(
      <div>
        <div><Skills/></div>
        <div><Who/></div>
      </div>
      
    )
  }
}

Experience.propTypes = {
  fetchSkill: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  skills: state.skills,
  who: state.who
});

export default connect(
  mapStateToProps,
  { fetchSkill}
)(Experience);
