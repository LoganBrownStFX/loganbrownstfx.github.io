import React, { Component } from "react";
import Skills from "./Skill/Skills";
import Who from "./Who/Who";
import Spinner from "../Common/Spinner";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSkill, fetchWho } from "../../redux/actions/skillActions";

class Experience extends Component {
  componentDidMount() {
    this.props.fetchSkill();
    this.props.fetchWho();
  }
  render() {
    
    const { skills } = this.props;
    const { who } = this.props;
    
    let whoObject;
    if(who.loading){
      whoObject = <Spinner/>
    } else{
      whoObject = <Who whoList={ who }/>
    }
    let skillObject;
    if (skills.loading) {
      skillObject = <Spinner />;
    } else {
      skillObject = <Skills skillList={ skills } />;
    }
    return(
      <div>
        <div>{skillObject}</div>
        <div>{whoObject}</div>
      </div>
      
    )
  }
}

Experience.propTypes = {
  fetchSkill: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  fetchWho: PropTypes.func.isRequired,
  who: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  skills: state.skills,
  who: state.who
});

export default connect(
  mapStateToProps,
  { fetchSkill, fetchWho}
)(Experience);
