import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../DashBoards/EndUser/Dashboard";
import * as SecureStore from "expo-secure-store";
import theme from "../theme";
import Button from "../components/Button";

export default function StartScreen({ navigation }) {
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     dispatch(
  //       setUserDetails(
  //         SecureStore.getItemAsync("user").then((res) => console.log(res))
  //       )
  //     )
  //   );
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={require("../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 250, height: 250 }}
        />
        <Text style={styles.text1}>
          Let's Save the{" "}
          <Text style={{ fontWeight: "bold" }}>Planet Together</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          screen={"Login"}
          btnText={"Get Started"}
          color={theme.colors.cream}
          txtColor={theme.colors.dark2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green2,
  },
  header: {
    flex: 4,
    backgroundColor: theme.colors.cream,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
    shadowColor: "#fff",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 50,
    marginBottom: 40,
  },
});
