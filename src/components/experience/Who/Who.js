import React, { useEffect } from "react";
import BasicCard from "../../../layout/BasicCard/BasicCard";
import WhoCard from "./WhoCard/WhoCard";
import WhoTitle from "./WhoTitle/WhoTitle"
import { fetchWho } from "../../../redux/actions/skillActions";
import { connect } from 'react-redux';
import Spinner from '../../Common/Spinner';
import PropTypes from "prop-types"

function Who(props){
    let icons = [
        "fa-users",
        "fa-retweet",
        "fa-mountain"
    ]
    
    useEffect(() =>{
        props.fetchWho();
    }, [])
    let whoList = props.who;
    let cards;
    console.log(props);
    if(whoList.loading){
        cards = <Spinner/>
    }else{
        cards = whoList.who.map((element, index ) =>(
            <BasicCard key= {index} header={true} icon={icons[index]}>
                <WhoCard key={index} cardKey={element.key} body={element.body}/>
            </BasicCard>
        ))
    }
   
    return(
        <div className="flex-container-column flex-center">
            <WhoTitle/>
        <div className="flex-container-row">
            {cards}
        </div>
        </div>
    )   
}

Who.propTypes = {
    fetchWho: PropTypes.func.isRequired,
    who: PropTypes.object.isRequired
};
  

const mapStatetoProps = state =>({
    who: state.who
})

export default connect(mapStatetoProps, { fetchWho })(Who);