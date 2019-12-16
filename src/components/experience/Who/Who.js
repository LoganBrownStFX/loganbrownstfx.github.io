import React from "react";
import BasicCard from "../../../layout/BasicCard/BasicCard";
import WhoCard from "./WhoCard/WhoCard";
import WhoTitle from "./WhoTitle/WhoTitle"

function Who(props){
    let icons = [
        "fa-users",
        "fa-retweet",
        "fa-mountain"
    ]
    let cardInfo = props.whoList.who;
    console.log(props);
    let cards;
    cards = cardInfo.map((element, index ) =>(
       <BasicCard key= {index} header={true} icon={icons[index]}>
        <WhoCard key={index} cardKey={element.key} body={element.body}/>
       </BasicCard>
    ))
    return(
        <div className="flex-container-column flex-center">
            <WhoTitle/>
        <div className="flex-container-row">
            {cards}
        </div>
        </div>
    )   

    
}

export default Who;