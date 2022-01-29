import * as SecureStore from "expo-secure-store";
import isEmpty from "../utils/isEmpty";

export const authenticated = () => {
  return SecureStore.getItemAsync("jwt").then((res) => {
    return !isEmpty(res) ? true : false;
  });
};

export const isBusinessUser = () => {
  return SecureStore.getItemAsync("user").then((res) => {
    const { role } = JSON.parse(res);
    console.log({ role });
    return role === 2 ? true : false;
  });
};
