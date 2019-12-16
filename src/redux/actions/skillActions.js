import { getSkillCall } from "../../services/apiService";
import { GET_SKILL, SKILL_LOADING, SKILL_ERROR } from "./types";

export function fetchSkill() {
  return async dispatch => {
    dispatch(skillLoading());
    try {
      const res = await getSkillCall();
      dispatch(getSkills(res));
    } catch (e) {
      dispatch(giveError());
    }
  };
}

const giveError = () =>{
  return{
    type: SKILL_ERROR,
    payload: {}
  }
}
const getSkills = (res) =>{
  return{
    type: GET_SKILL,
    payload: res.data
  }
}
const skillLoading = () => {
  return {
    type: SKILL_LOADING
  };
};
