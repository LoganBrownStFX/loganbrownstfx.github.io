import { ADD_SKILL, GET_SKILL, SKILL_LOADING } from "../actions/types";

const initialState = { skills: {}, loading: false };

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SKILL_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_SKILL: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        skills: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
