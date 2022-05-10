import React from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../Config/theme/Index";
import Button from "../../components/Button";
import { StatusBar as Status } from "expo-status-bar";
import GradientText from "../../components/GradientText";
import * as Animatable from "react-native-animatable";

const ChooseUser = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/startScreenBackground.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInUpBig"
            duration={2000}
            source={require("../../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 350, marginBottom: 50 }}
          />
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          duration={2000}
          style={styles.footer}
        >
          <Animatable.Text
            animation="zoomIn"
            duration={1000}
            delay={1200}
            style={styles.text1}
          >
            What Defines You
          </Animatable.Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignBusiness")}
          >
            <Text style={styles.buttonText}>Enterprise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("userSignUp")}
          >
            <Text style={styles.buttonText}>Individual</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
    justifyContent: "flex-end",
  },
  header: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 30,
    paddingBottom: 15,
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
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 22,
    color: "#fcfffc",
    fontWeight: "bold",
    textAlign: "center",
  },
});
