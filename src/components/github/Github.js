import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommits } from "../../redux/actions/githubActions";
import Spinner from "../Common/Spinner";
import BasicCard from "../../layout/BasicCard/BasicCard";
import "./Github.css";

class Github extends Component {

  async componentDidMount(){
    this.props.fetchCommits();
  }

  render(){
    const { github } = this.props;
    let commits;
    console.log(github);
    if (github.loading || !github.github || !github.github.commits) {
      commits = <Spinner />;
    } else {
      commits = <span>{github.github.commits.length}</span>;
    }
    return (
      <div className="flex-container-column flex-center">
        <BasicCard>{commits}</BasicCard>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  github: state.github,
  // commits: state.github.github.commits,
  // loading: state.github.loading
})

export default connect(mapStateToProps, {fetchCommits})(Github);
