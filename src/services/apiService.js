import axios from "axios";
import config from "../constants/config";

export async function getEducationCall() {
  try {
    let educationObj = await axios.get(config.API_URL.PROD_URL + "/education");
    return educationObj;
  } catch (e) {
    return {
      errors: true,
      body: e.message
    };
  }
}
export async function getSkillCall() {
  try {
    let skillObj = await axios.get(config.API_URL.PROD_URL + "/skill");
    return skillObj;
  } catch (e) {
    return { error: e.message };
  }
}
export async function getWhoCall(){
  try{
    let whoObj = await axios.get(config.API_URL.PROD_URL + "/skill/who")
    return whoObj;
  }catch(e){
    return { error: e.message }
  }
}
export const getCommits = async () =>{
  let commitObj;
  try{
    commitObj = await axios.get(config.API_URL.PROD_URL + "/github/commits");
  } catch(e){
    throw e;
  }
  return commitObj;
}
