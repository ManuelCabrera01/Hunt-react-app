import uuid from "uuid";
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  NOTES_LOADING
} from "../actions/types";

const initialState = {
  note: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.paylo,
        loading: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      };
    case NOTES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
