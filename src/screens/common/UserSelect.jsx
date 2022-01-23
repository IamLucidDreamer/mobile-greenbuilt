import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import GreadientText from "../components/GradientText";

const UserSelect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GreadientText text={"What Defines you"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpBusiness")}
          >
            <Text style={styles.buttonText}>Enterprise</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#1e6100", "#4bc834"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpEndUser")}
          >
            <Text style={styles.buttonText}>Individual</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default UserSelect;

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
