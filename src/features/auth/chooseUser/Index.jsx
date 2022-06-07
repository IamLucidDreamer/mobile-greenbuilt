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
      <LinearGradient
        colors={[theme.colors.primaryBg, theme.colors.primaryBg2]}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
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
          <Text
            animation="zoomIn"
            duration={1000}
            delay={1200}
            style={styles.text1}
          >
            What Defines You
          </Text>
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
      </LinearGradient>
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
    justifyContent: "space-evenly",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: 30,
    padding: 20,
  },
  text1: {
    textAlign: "left",
    color: theme.colors.primaryBg,
    fontSize: 45,
    marginBottom: 20,
    fontWeight: "700",
  },
  button: {
    alignSelf: "center",
    width: "100%",
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
