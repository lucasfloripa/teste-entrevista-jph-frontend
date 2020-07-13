import { GET_DEBT, GET_DEBTS, CREATE_DEBT, UPDATE_DEBT, DELETE_DEBT } from "../actions/types";

const INITIAL_STATE = {
  debt: {},
  debts: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DEBT:
      return { ...state, debt: action.payload };
    case GET_DEBTS:
      return { ...state, debts: action.payload };
    case CREATE_DEBT:
      return { ...state, debts: [action.payload, ...state.debts] };
    case UPDATE_DEBT:
      return {
        ...state, debts: state.debts.map((debt) => debt._id === action.payload.id
          ? (debt = action.payload) : debt)
      };
    case DELETE_DEBT:
      return { ...state, debts: state.debts.filter((debt) => debt !== action.payload) };
    default:
      return { ...state };
  }
}
