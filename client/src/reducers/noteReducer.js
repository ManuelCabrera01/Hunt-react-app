import uuid from "uuid";
import { GET_NOTES, ADD_NOTES, DELETE_NOTES } from "../actions/types";

const initialState = {
  notes: [
    {
      id: uuid(),
      name: "test1"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state
      };
    default:
      return state;
  }
}
