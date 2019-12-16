import { GET_WHO, WHO_LOADING } from "../actions/types";

let initialState = { who: {}, loading: true};

export default function (state = initialState, action){
    switch(action.type){
        case GET_WHO:{
            return{
                ...state,
                loading: false,
                who: action.payload
            }
        }
            
        case WHO_LOADING:{
            return{
                ...state,
                loading: true
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}
