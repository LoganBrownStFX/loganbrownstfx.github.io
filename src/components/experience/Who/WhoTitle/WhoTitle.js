import React from 'react'
import useStyles from "./WhoTitleStyles"
import strings from "../../../../constants/strings"


function WhoTitle(){
    const classes = useStyles();
    return(
        <div className={`flex-container-row flex-center ${classes.root}`}>
            <span className="title">
                {strings.pages.experience.who.title}
            </span>
        </div>
    )
}

export default WhoTitle;