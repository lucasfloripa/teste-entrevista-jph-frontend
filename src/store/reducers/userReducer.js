import { GET_USER, GET_USERS } from "../actions/types";

const INITIAL_STATE = {
  user: {},
  users: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
}
