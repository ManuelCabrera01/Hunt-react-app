import {
  GET_JOBS,
  ADD_JOB,
  UPDATE_JOBS,
  DELEte_JOBS,
  ADD_JOBS_CONTACT,
  DELETE_JOBS_CONTAC,
  ADD_JOBS_NOTE,
  DELETE_JOBS_NOTE
} from "./types";

export const getJobs = () => {
  return {
    type: GET_JOBS
  };
};
