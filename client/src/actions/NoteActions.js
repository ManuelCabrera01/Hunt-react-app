import { GET_NOTES, ADD_NOTE, DELETE_NOTE } from "./types";

export const getNotes = () => {
  return {
    type: GET_NOTES
  };
};
