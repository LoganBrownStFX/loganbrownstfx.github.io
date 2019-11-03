import React from "react";
import strings from "../../constants/strings";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Title.css";

const useStyles = makeStyles({
  root: {
    "& .main-button": {
      margin: "1em",
      backgroundColor: "#ce93d8",
      color: "white",
      width: "30%",
      animation: [["slide-in-right", "1s", "linear"]]
    },
    "& .main-outline": {
      margin: "1em",
      color: "#ce93d8",
      border: [[1, "solid", "#ce93d8"]],
      width: "30%",
      borderRadius: "4px",
      animation: [["slide-in-left", "1s", "linear"]]
    }
  }
});

function Title() {
  const classes = useStyles();
  return (
    <div id="Title" className={`${classes.root} flex-container-column`}>
      <span className="name fadeInDown">{strings.title.name}</span>
      <span className="slogan fadeInUp">{strings.title.slogan}</span>
      <div className="flex-container-row flex-center">
        <Button className={`main-button`}>Github</Button>
        <Button className={`main-outline`}>LinkedIn</Button>
      </div>
    </div>
  );
}

export default Title;
