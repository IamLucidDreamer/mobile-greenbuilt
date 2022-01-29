import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import GradientText from "../../components/GradientText";
import { useSelector } from "react-redux";

const Dashboard = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Hello {user.data.name}</Text>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderRadius: 20,
            backgroundColor: "#fcfffc",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <GradientText text={user.data.points} fontSize={60} />
          <Text style={styles.text2}>Total Points</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <GradientText text="Scans" fontSize={40} />
      </View>

      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button}
      >
        <TouchableOpacity onPress={() => navigation.navigate("ScannerUser")}>
          <MaterialIcons name="qr-code-scanner" color={"#fcfffc"} size={50} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140035",
  },
  text1: { fontSize: 20, marginTop: 10, color: "#fcfffc" },
  text2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#140035",
    textAlign: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "#140035",
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  container2: {
    flex: 2,
    backgroundColor: "#fcfffc",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text3: { fontSize: 25, color: "#fff" },
  text4: { fontSize: 42, color: "#fff", fontWeight: "bold" },
  text5: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 15 },
  button: {
    position: "absolute",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 40,
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#446C24",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
});
