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
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import theme from "../../Config/theme/Index";
import { setUserDetails } from "../../store/actions/user";
import isEmpty from "../../utils/isEmpty";
import * as Animatable from "react-native-animatable";
import { setPoints } from "../../store/actions/appActions";
import axios from "../../helpers/http-helper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function StartScreen({ navigation }) {
  const dispatch = useDispatch();

  // To check Wheather the User is Logged in or Not
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
              dispatch(
                setPoints({
                  actualPoints: res.data.user.points,
                  totalPoints: res.data.user.totalPoints,
                })
              );
            })
            .catch((err) => console.log(err, "Hello From Catch"));
        }
      });
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[theme.colors.primaryBg, theme.colors.primaryBg2]}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 350, marginBottom: 90 }}
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUpBig"
          duration={1000}
        >
          <Text style={styles.text1}>Let's Save the Planet Together</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text animation={"fadeInRight"} style={styles.buttonText}>
              Get Started
            </Text>
            <FontAwesome5
              animation={"fadeInRight"}
              name={"arrow-right"}
              size={18}
              color={"#fff"}
            />
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: theme.colors.white,
    justifyContent: "space-evenly",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: 30,
    padding: 20,
  },
  text1: {
    textAlign: "left",
    color: theme.colors.primaryBg,
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "700",
  },
  button: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: "bold",
    marginRight: 20,
  },
});
