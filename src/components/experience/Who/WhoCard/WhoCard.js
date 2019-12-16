import React from 'react';
import useStyles from "./WhoCardStyles";


function WhoCard(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="key">
            <span>{props.cardKey}</span>
            </div>
            <div className="body"></div>
            
            <span>{props.body}</span>
        </div>
    )
}

export default WhoCard;