import { GET_SKILL, SKILL_LOADING, SKILL_ERROR } from "../actions/types";

const initialState = { skills: {}, loading: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case SKILL_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_SKILL: {
      return {
        ...state,
        loading: false,
        skills: action.payload
      };
    }
    case SKILL_ERROR:{
      return{
        loading: false,
        error: "No Skills Found"
      }
      
    }
    default: {
      return {
        ...state
      };
    }
  }
}
