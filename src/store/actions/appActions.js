import { SET_LOADER, SET_ERROR } from "../constants/index";

const isLoading = (data) => ({
  type: SET_LOADER,
  payload: data,
});

const errorMessage = (data) => ({
  type: SET_ERROR,
  payload: data,
});

export { errorMessage, isLoading };
