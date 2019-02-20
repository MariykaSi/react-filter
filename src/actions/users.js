import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "../constants/actions/users";

export const getUsersStart = () => ({
  type: GET_USERS_START
});

export const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  payload: data
});

export const getUsersError = msg => ({
  type: GET_USERS_ERROR,
  payload: msg
});
