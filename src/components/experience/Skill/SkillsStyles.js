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
    "& .skill-bar-list": {
      padding: "2em"
    }
  }
});

export default useStyles;
