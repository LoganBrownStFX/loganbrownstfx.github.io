import { getSkillCall } from "../../services/apiService";
import { GET_SKILL, SKILL_LOADING } from "./types";

export function getSkill() {
  return async dispatch => {
    dispatch(skillLoading());
    try {
      const res = await getSkillCall();
      dispatch({
        type: GET_SKILL,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: GET_SKILL,
        payload: {}
      });
    }
  };
}
export const skillLoading = () => {
  return {
    type: SKILL_LOADING
  };
};
