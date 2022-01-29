import axios from "../../helpers/http-helper";
import * as SecureStore from "expo-secure-store";
import { LOGIN, SIGNUP_BUSINESS, SIGNUP_USER } from "../constants";
import {
  getToken,
  isAuthenticated,
  setID,
  setRole,
  setToken,
  setUser,
} from "../actions/authActions";

const setUserDetails = (data) => ({
  type: LOGIN,
  payload: data,
});

const signUpUser = (data) => ({
  type: SIGNUP_USER,
  payload: data,
});

const signUpBusiness = (data) => ({
  type: SIGNUP_BUSINESS,
  payload: data,
});

export const login =
  ({ email, password }) =>
  (dispatch) => {
    axios
      .post("/signin", {
        email,
        password,
      })
      .then((res) => {
        dispatch(setUserDetails(res.data));
        SecureStore.setItemAsync("jwt", res.data.token);
        SecureStore.setItemAsync("user", JSON.stringify(res.data.data));
      })
      .catch((err) => console.log({ err }));
  };

export const signUpEndUser =
  ({ name, email, password }) =>
  (dispatch) => {
    console.log(name, email, password);
    axios
      .post("/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        dispatch(
          login({
            email,
            password,
          })
        );
      })
      .catch((err) => console.log({ err }));
  };

export const signUpNewBusiness =
  ({ name, phone, email, password }) =>
  (dispatch) => {
    console.log(name, phone, email, password);
    axios
      .post("/signup?userType=2", {
        name,
        phone,
        email,
        password,
      })
      .then((res) => {
        console.log("Test");
        dispatch(login({ email, password }));
      })
      .catch((err) => console.log({ err }));
  };
