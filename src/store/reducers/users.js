import _ from "lodash";
import {
  FETCH_SINGLE,
  FETCH_LIST,
  CREATE,
  EDIT,
  DELETE,
} from "../actions/types";

const INITIAL_STATE = {};

// Updating user data
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_SINGLE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE: 
      return { ...state, [action.payload.id]: action.payload };
    case EDIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
