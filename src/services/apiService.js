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
