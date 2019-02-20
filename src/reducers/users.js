import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "../constants/actions/users";

const initialState = {
  list: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        list: action.payload.items,
        error: null
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
