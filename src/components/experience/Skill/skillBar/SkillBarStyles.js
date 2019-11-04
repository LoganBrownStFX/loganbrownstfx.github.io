import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1em 0em",
    height: "auto",
    "& .label-container": {
      justifyContent: "space-between",
      "& .label": {
        textAlign: "left",
        flexBasis: 0,
        transition: [["flex-basis", "1s", "linear", "0.75s"]]
      },
      "& .value": {
        textAlign: "left",
        flexGrow: "1",
        opacity: "0",
        transition: [["opacity", "1s", "linear", "1s"]]
      }
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
