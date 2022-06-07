import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import theme from "../../Config/theme/Index";
import { useSelector, useDispatch } from "react-redux";
import { errorMessage } from "../../store/actions/appActions";
import * as Animatable from "react-native-animatable";

const Errors = (props) => {
  const dispatch = useDispatch();
  const [fadeIn, setFadeIn] = useState(true);
  const error = useSelector((state) => state.appReducers);

  if (error.error.show === true) {
    setTimeout(() => {
      setFadeIn(false);
      console.log("hello");
    }, 6000);
    setTimeout(() => {
      console.log("hello2");
      setFadeIn(true);
      dispatch(errorMessage(false));
    }, 7000);
  }

  return (
    <>
      {error.error.show === true ? (
        <Animatable.View
          style={styles.box}
          animation={fadeIn ? "fadeInDownBig" : "fadeOutUp"}
          duration={1000}
        >
          <Text style={styles.text1}>{error.error.message}</Text>
        </Animatable.View>
      ) : null}
    </>
  );
};

export default Errors;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: theme.colors.primaryBg,
    position: "absolute",
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 25,
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  text1: {
    fontSize: 15,
    color: theme.colors.white,
  },
});
