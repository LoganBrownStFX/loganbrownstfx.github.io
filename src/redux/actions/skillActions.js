import { getSkillCall, getWhoCall } from "../../services/apiService";
import { GET_SKILL, SKILL_LOADING, SKILL_ERROR, WHO_LOADING, GET_WHO } from "./types";

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
export function fetchWho(){
  return async dispatch =>{
    dispatch(whoLoading());
    try{
      const res = await getWhoCall();
      dispatch(getWho(res));
    }catch(e){
      dispatch(giveError());
    }
  }
}
const giveError = () =>{
  return{
    type: SKILL_ERROR,
    payload: {}
  }
}
const getWho = (res) =>{
  return{
    type: GET_WHO,
    payload: res.data
  }
}
const getSkills = (res) =>{
  return{
    type: GET_SKILL,
    payload: res.data
  }
}
const whoLoading = () =>{
  return{
    type: WHO_LOADING,
  }
}
const skillLoading = () => {
  return {
    type: SKILL_LOADING
  };
};
