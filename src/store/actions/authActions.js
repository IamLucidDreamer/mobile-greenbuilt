import axiosInstance from "../../helpers/http-helper";
import * as SecureStore from "expo-secure-store";
import {
  IS_AUTH,
  SET_ID,
  SET_TOKEN,
  SET_USER,
  SET_ROLE,
} from "../constants/index";

const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

const isAuthenticated = (data) => ({
  type: IS_AUTH,
  payload: data,
});

const setToken = (data) => ({
  type: SET_TOKEN,
  payload: data,
});

const setRole = (data) => ({
  type: SET_ROLE,
  payload: data,
});

const setID = (data) => ({
  type: SET_ID,
  payload: data,
});

const clearStore = () => {
  return (dispatch) => {
    SecureStore.deleteItemAsync("token").then((res) => {
      SecureStore.deleteItemAsync("id").then((res) => {
        dispatch(setToken(null));
        dispatch(setID(null));
      });
    });
  };
};

const getToken = () => {
  return (dispatch) => {
    SecureStore.getItemAsync("token").then((res) => {
      dispatch(setToken(res));
      SecureStore.getItemAsync("id").then((res) => {
        dispatch(setID(res));
      });
    });
  };
};

// const getUser = () => {
//   return (dispatch) => {
//     dispatch(isAuthenticated("loading"));
//     SecureStore.getItemAsync("jwt").then((token) => {
//       dispatch(setToken(token));
//       SecureStore.getItemAsync("id").then((id) => {
//         dispatch(setID(id));
//         axiosInstance
//           .get(`/user/get/${id}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           })
//           .then((res) => {
//             if (res?.data?.data?.blocked) {
//               dispatch(isAuthenticated("false"));
//               dispatch(clearStore());
//             } else {
//               dispatch(setUser(res.data.data));
//               dispatch(isAuthenticated("true"));
//               dispatch(lastLoggedIn());
//             }
//           })
//           .catch((err) => {
//             dispatch(isAuthenticated("false"));
//             dispatch(clearStore());
//           });
//       });
//     });
//   };
// };

// const userActivity = (activityDetails, userName) => {
//   return (dispatch) => {
//     const token = JSON.parse(localStorage.getItem('jwt'));
//     const id = JSON.parse(localStorage.getItem('id'));
//     axiosInstance
//       .post(
//         `/user-activity/create/${id}`,
//         {
//           activityDetails: activityDetails,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       )
//       .then((res) => console.log(res));
//   };
// };

export {
  getToken,
  //r getUser,
  clearStore,
  setUser,
  isAuthenticated,
  setToken,
  setRole,
  setID,
};
