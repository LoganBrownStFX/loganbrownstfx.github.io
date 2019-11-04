import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "2em",
    width: "100%",
    "& .skills-title": {
      fontSize: "4em",
      animation: [["slide-in-top", "2s", "linear"]]
    },
    "& .skills-subtitle": {
      opacity: "0.6",
      animation: [["fade-in-faded", "2s", "linear"]]
    },
    "& .skill-bar-list-container": {
      padding: "2em",
      "& .skill-bar-list": {
        width: "100%",
        margin: "0.5em"
      }
    }
  }
});

export default useStyles;
