import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommits } from "../../redux/actions/githubActions";
import Spinner from "../Common/Spinner";
import BasicCard from "../../layout/BasicCard/BasicCard";
import Commits from "./Commits";
import { withStyles } from "@material-ui/core";
import { GithubStyles } from "./GithubStyles";


class Github extends Component {

  async componentDidMount(){
    this.props.fetchCommits();
  }

  render(){
    const { commits, loading} = this.props;
    let commitsObj;
    if (loading || !commits) {
      commitsObj = <Spinner />;
    } else {
      commitsObj = <span>{commits[0].message}</span>;
    }
    return (
      <div className={`flex-container-row flex-center ${this.props.classes.root}`}>
        <div className={`column-container flex-container-column flex-center`}>
          <Commits/>
        </div>
        <div className={`column-container flex-container-column flex-center`}>
          <BasicCard>{commitsObj}</BasicCard>
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = state => ({
  github: state.github,
  commits: state.github.github.commits,
  loading: state.github.loading
})

export default withStyles(GithubStyles)(connect(mapStateToProps, {fetchCommits})(Github));
