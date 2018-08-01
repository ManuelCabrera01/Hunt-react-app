import axios from "axios";
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from "./types";

export const getNotes = () => dispatch => {
  dispatch(setNotesLoading());
  axios.get("/api/notes").then(res =>
    dispatch({
      type: GET_NOTES,
      payload: res.data
    })
  );
};
export const deleteNote = id =>dispatch=> {
  axios.delete(`/api/notes${id}`).then(res=>dispatch({
    type:DELETE_NOTE,
    payload:id
  }))
};
export const addNote = note => dispatch => {
  axios.post("/api/note", note).then(res =>
    dispatch({
      type: ADD_NOTE,
      payload: res.data
    })
  );
};

export const setNotesLoading = () => {
  return {
    type: NOTES_LOADING
  };
};
