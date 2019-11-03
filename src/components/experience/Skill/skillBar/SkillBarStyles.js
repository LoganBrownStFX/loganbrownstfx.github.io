import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "auto",
    "& .label-container": {
      justifyContent: "space-between",
      "& .label": {},
      "& .value": {}
    },
    "& .bar-container": {
      overflow: "hidden",
      height: "20px",
      borderRadius: "5px",
      border: [[1, "solid", "white"]],
      "& .value-bar": {
        transition: [["width", "1s", "linear", "0.75s"]],
        width: "0",
        height: "20px",
        backgroundColor: "#ce93d8"
      }
    }
  }
});

export default useStyles;
