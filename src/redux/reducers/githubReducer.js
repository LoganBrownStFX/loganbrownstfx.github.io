import { GET_COMMITS, GITHUB_LOADING} from "../actions/types";


const initialState = { github: {} , loading: true}

export default function(state = initialState, action){
    switch (action.type){
        case GITHUB_LOADING:{
            return{
                ...state,
                loading: true
            }
        }
        case GET_COMMITS:{
            return{
                github: action.payload,
                loading: false
            }
        }
        default:{
            return{
                github: {},
                loading: false
            }
        }
    }
}