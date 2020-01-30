import React from "react";
import useStyles from "./CommitsStyles";


const Commits = () => {
    const classes = useStyles();

    return(
        <div className={`${classes.root}`}>Commits</div>
    )
}


export default Commits;