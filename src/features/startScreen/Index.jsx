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
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText";
import { useSelector, useDispatch } from "react-redux";

import * as SecureStore from "expo-secure-store";
import theme from "../../Config/theme/Index";
import Button from "../components/Button";
import { setUserDetails } from "../../store/actions/user";
import isEmpty from "../../utils/isEmpty";
import { StatusBar as Status } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import { setPoints } from "../../store/actions/appActions";
import axios from "../../helpers/http-helper";

export default function StartScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      SecureStore.getItemAsync("user").then((res) => {
        if (!isEmpty(token)) {
          const user = { data: null };
          user.data = JSON.parse(res);
          dispatch(setUserDetails(user));
          console.log(user.data.id);
          axios
            .get(`/user/get/${user.data.id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              console.log(res.data.user.points);
              dispatch(setPoints(res.data.user.points));
            })
            .catch((err) => console.log(err, "Hello From Catch"));
        }
      });
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Status style="inverted" />
      <ImageBackground
        source={require("../../assets/startScreenBackground.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInUpBig"
            duration={2000}
            source={require("../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 350, marginBottom: 50 }}
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUpBig"
          duration={2000}
        >
          <Animatable.Text animation="zoomIn" duration={1000} delay={1200} style={styles.text1}>Let's Save the Planet Together</Animatable.Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingVertical: 30,
  },
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 45,
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.greenMain,
    borderRadius: 7,
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
