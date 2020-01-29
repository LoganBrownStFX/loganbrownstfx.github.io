import { GET_COMMITS, GITHUB_LOADING} from "../actions/types";
import axios from 'axios';
import { getCommits } from "../../services/apiService";

export const fetchCommits = () =>{
    return async dispatch => {
        dispatch(setGithubLoading())
        try{
            const res = await getCommits();
            dispatch(setCommits(res));
        }catch(e){
            throw e;
        }
    }
}

const setCommits = (res) => {
    return{
        type: GET_COMMITS,
        payload: res.data
    }
}
const setGithubLoading = () => {
    return{
        type: GITHUB_LOADING,
        payload: {}
    }
}