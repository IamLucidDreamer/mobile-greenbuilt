import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../Config/theme/Index";
import { useSelector, useDispatch } from "react-redux";
import { errorMessage } from "../../store/actions/appActions";

const Errors = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.appReducers);
  console.log(error.error);

  if (error.error.show === true) {
    setTimeout(() => {
      dispatch(errorMessage(false));
    }, 3000);
  }
  return (
    <>
      {error.error.show === true ? (
        <View style={styles.box}>
          <Text style={styles.text1}>{error.error.message}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Errors;

const styles = StyleSheet.create({
  box: {
    width: "95%",
    maxHeight: 400,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : "5",
    alignSelf: "center",
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.purple,
    position: "absolute",
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: theme.colors.dark2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 15,
  },
  text1: {
    fontSize: 18,
    color: theme.colors.purple,
  },
});
