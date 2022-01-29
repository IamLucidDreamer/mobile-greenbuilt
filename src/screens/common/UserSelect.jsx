import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GreadientText from "../components/GradientText";
import theme from "../theme";
import Button from "../components/Button";

const UserSelect = ({ navigation }) => {
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
          What Defines <Text style={{ fontWeight: "bold" }}>You</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          screen={"SignBusiness"}
          btnText={"Enterprise"}
          color={theme.colors.cream}
          txtColor={theme.colors.dark2}
        />
        <Button
          screen={"SignUser"}
          btnText={"Individual"}
          color={theme.colors.cream}
          txtColor={theme.colors.dark2}
        />
      </View>
    </View>
  );
};

export default UserSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green2,
  },
  header: {
    flex: 3,
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
    justifyContent: "space-evenly",
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
    marginVertical: 15,
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
