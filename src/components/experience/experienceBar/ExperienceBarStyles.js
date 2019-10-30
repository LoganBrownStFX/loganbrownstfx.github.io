import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "auto",
    "& .label-container": {
      justifyContent: "space-between",
      "& .label": {},
      "& .value": {}
    }
  }
});

export default useStyles;
