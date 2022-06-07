import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import React from "react";
import { StatusBar as Status } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import style from "react-native-datepicker/style";
import theme from "../../../Config/theme/Index";
import Feather from "react-native-vector-icons/Feather";

const Support = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={{ flex: 1 }}>
        <Image
          animation="fadeInUpBig"
          duration={800}
          source={require("../../../assets/logoGreenbuilt.png")}
          resizeMode="contain"
          style={{ width: "95%", height: 100, marginTop: 100 }}
        />
        <Text style={styles.text1}>Support</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Feather name="phone" color={theme.colors.white} size={28} />
            <Text style={[styles.textInput]}>Call Us</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:1234567890`);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+91 1234567890</Text>
          </TouchableOpacity>
          <View style={styles.inputField}>
            <Feather name="mail" color={theme.colors.white} size={28} />
            <Text style={[styles.textInput]}>Email Us</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `mailto:support@greenbuilt.in?subject=Support Request Raised for the Green Built App`
              );
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>support@greenbuilt.in</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#000",
  },
  text1: {
    fontSize: 26,
    color: theme.colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: { paddingHorizontal: 20 },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginTop: 10,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 25,
    paddingLeft: 10,
    color: theme.colors.white,
  },
  button: {
    alignSelf: "center",
    width: "95%",
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
    textAlign: "center",
  },
});
