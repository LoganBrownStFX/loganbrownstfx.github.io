import React from "react";
import BasicCard from "../../../layout/BasicCard/BasicCard";
import WhoCard from "./WhoCard/WhoCard";
import WhoTitle from "./WhoTitle/WhoTitle"
const cardInfo = [
    {
        key: "Leader",
        body: "Through academic, social, and professional life, I have consistently proven myself a leader",
        icon: "fa-users"
    },
    {
        key: "Adaptabile",
        body: "I am constantly reinventing myself in order to keep up with the everchanging landscape of Software Engineering",
        icon: "fa-retweet"
    },
    {
        key: "Overcomer",
        body: "I have never shyed away from a challenge or an obstacle and always meet it with full force, applying my skills and experience to find solutions efficiently",
        icon: "fa-mountain"
    }
]
function Who(){
    let cards;
    cards = cardInfo.map((element, index ) =>(
       <BasicCard key= {index} header={true} icon={element.icon}>
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