import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import GreadientText from "../components/GradientText";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GreadientText text={"Forgot Password"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text1}>Email</Text>
        <View style={styles.inputField}>
          <Feather name="user" color={"#140035"} size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#140035"
            style={[
              styles.textInput,
              {
                color: "#140035",
              },
            ]}
            autoCapitalize="none"
          />
        </View>
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Log")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140035",
  },
  header: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#29d38a",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
  },
  text1: {
    fontSize: 20,
    marginBottom: 5,
    color: "#140035",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#140035",
    paddingBottom: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  text2: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
    width: "95%",
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
    textAlign: "center",
    fontWeight: "bold",
  },
});
