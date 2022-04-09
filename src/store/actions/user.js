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
import { errorMessage, setPoints } from "./appActions";

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
        const user = res.data;
        console.log({ user });
        dispatch(setUserDetails(res.data));
        dispatch(setPoints(res.data.data.points));
        dispatch(errorMessage({ show: true, message: res.data.message }));
        SecureStore.setItemAsync("jwt", res.data.token);
        SecureStore.setItemAsync("user", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        dispatch(
          errorMessage({ show: true, message: err.response.data.error })
        );
      });
  };

export const signUpEndUser =
  ({ name, email, password, dateOfBirth, phoneNumber }) =>
  (dispatch) => {
    console.log(name, email, password, dateOfBirth, phoneNumber);
    axios
      .post("/signup", {
        name,
        email,
        password,
        dateOfBirth,
        phoneNumber,
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
  ({ name, phone, email, password, ebServiceNo, industryType, gstin }) =>
  (dispatch) => {
    console.log(name, phone, email, password, ebServiceNo, industryType, gstin);
    axios
      .post("/signup?userType=2", {
        name,
        phone,
        email,
        password,
        ebServiceNo,
        industryType,
        gstin,
      })
      .then((res) => {
        dispatch(login({ email, password }));
      })
      .catch((err) => console.log({ err }));
  };

export const logout = () => {
  return (dispatch) => {
    SecureStore.deleteItemAsync("jwt").then(() => {
      SecureStore.setItemAsync("user", "").then(() => {
        dispatch(setUserDetails(false));
        dispatch(errorMessage({ show: true, message: "User Logged Out" }));
      });
    });
  };
};

export { setUserDetails };
