import { SET_LOADER, SET_ERROR, UPDATE_POINTS } from "../constants/index";

const isLoading = (data) => ({
  type: SET_LOADER,
  payload: data,
});

const errorMessage = (data) => ({
  type: SET_ERROR,
  payload: data,
});

const setPoints = (data) => ({
  type: UPDATE_POINTS,
  payload: data,
});

export { errorMessage, isLoading, setPoints };
