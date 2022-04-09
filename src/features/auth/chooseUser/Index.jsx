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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../Config/theme/Index";
import Button from "../../components/Button";
import { StatusBar as Status } from "expo-status-bar";
import GradientText from "../../components/GradientText";

const ChooseUser = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logoGreenbuilt.png")}
          resizeMode="contain"
          style={{ width: 350, height: 350, marginTop: 10 }}
        />
        <GradientText text={"What Defines You"} fontSize={60} />
      </View>
      <View style={styles.footer}>
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => navigation.navigate("SignBusiness")}>
            <Text style={styles.buttonText}>Enterprise</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => navigation.navigate("userSignUp")}>
            <Text style={styles.buttonText}>Individual</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
  },
  header: {
    flex: 5,
    backgroundColor: theme.colors.purple,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    margin: 10,
  },
  text1: {
    fontSize: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: theme.colors.dark2,
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
    fontWeight: "bold",
    textAlign: "center",
  },
});
