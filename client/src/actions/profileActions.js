import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  // GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from "./types";

// GET current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {} // send empty profile because then profile fields will not have erros
      })
    );
};

//load profile
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
