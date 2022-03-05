import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../../DashBoards/EndUser/Dashboard";
import * as SecureStore from "expo-secure-store";
import theme from "../../theme";
import Button from "../../components/Button";
import { setUserDetails, logout } from "../../../store/actions/user";
import isEmpty from "../../../utils/isEmpty";
import { StatusBar as Status } from "expo-status-bar";
import Feather from "react-native-vector-icons/Feather";

export default function StartScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      SecureStore.getItemAsync("user").then((res) => {
        if (!isEmpty(token)) {
          const user = { data: null };
          user.data = JSON.parse(res);
          dispatch(setUserDetails(user));
        }
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <View style={styles.header}>
        <Image
          source={require("../../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 250, height: 250 }}
        />
        <GradientText text={"GREENBUILT"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <Feather name="check-circle" size={60} color={theme.colors.purple} />
        <GradientText text={"Account Verification Pending."} fontSize={40} />
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
              navigation.navigate("Start");
            }}
            style={styles.btn}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
  },
  footer: {
    flex: 2,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 50,
    marginBottom: 40,
  },
  button: {
    alignSelf: "center",
    marginVertical: 10,
    width: "90%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#29d38a",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    color: "#fcfffc",
    fontWeight: "bold",
    textAlign: "center",
  },
});
