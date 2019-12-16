import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    margin: "0.5em",
    backgroundColor: "#404040",
    overflow: "visible",
    width: "100%",
    "& .header":{
     "& .line":{
       backgroundColor: "#ce93d8",
       height: "5px",
       width: "100%",
       borderRadius: "4px 4px 0 0",
     },
     "& .header-icon":{
      transform: "translateY(-50%)",
       "& .icon-container":{
         height: "2.5em",
         width: "2.5em",
         borderRadius: "50%",
         backgroundColor: "#ce93d8",
         border: [[1, "solid", "white"]],
         "& svg":{
           width: "22px",
           height: "22px",
           color: "white"
         }
         
       }
     }
    },
    "& .content":{
      padding: "0em 0.25em 0.25em 0.25em"
    }
  }
});

function BasicCard(props) {
  const classes = useStyles();
  let header;
  if(props.header){
    header = 
      <div className= "header flex-container-column flex-center">
        <div className="line"></div>
        <div className="header-icon">
            <div className="icon-container flex-container-column flex-center">
              <span className={`fa ${props.icon}`}></span>
            </div>
        </div>
      </div>
    
  }

  return (
    <Card className={classes.root}>
      {header}
      <div className="content">{props.children}</div>
    </Card>
  );
}

export default BasicCard;
