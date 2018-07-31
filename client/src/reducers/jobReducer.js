import uuid from "uuid";
import {
  GET_JOBS,
  ADD_JOBS,
  UPDATE_JOBS,
  DELEte_JOBS,
  ADD_JOBS_CONTACT,
  DELETE_JOBS_CONTAC,
  ADD_JOBS_NOTE,
  DELETE_JOBS_NOTE
} from "../actions/types";

const initialState = {
  jobs: [
    {
      id: uuid(),
      name: "test1",
      position: "test1",
      phoneNum: "123456",
      notes: [
        {
          content: "test1",
          tittle: "test1"
        }
      ],
      contacts: [
        {
          name: "test1",
          company: "test1",
          position: "test1",
          phoneNum: "test1",
          email: "test1",
          touch: "test1",
          comment: "test1"
        }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state
      };
    default:
      return state;
  }
}
