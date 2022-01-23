import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Receipt = ({ navigation }) => {
  return (
    <ScrollView style={styles.container1}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <Text style={styles.text1}>Your CO2 Footprint Receipt</Text>
        <Feather
          name={"arrow-up-circle"}
          style={{ color: "#b1b1b1", marginHorizontal: 5 }}
          size={25}
        />
      </View>
      <View
        style={{
          backgroundColor: "#F2F2F7",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 17, color: "#446C24", marginBottom: 30 }}>
          22.02.2020
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: "#446C24",
            padding: 10,
            marginBottom: 30,
            textAlign: "center",
            fontWeight: "bold",
            borderBottomWidth: 1,
            borderColor: "#446C24",
            borderStyle: "dashed",
          }}
        >
          GREEN RECEIPT
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 17, color: "#446C24" }}>
            Your Co2 Footprint
          </Text>
          <Text style={{ fontSize: 17, color: "#446C24" }}>40.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 70,
          }}
        >
          <Text style={{ fontSize: 17, color: "#446C24" }}>Reduced</Text>
          <Text style={{ fontSize: 17, color: "#446C24" }}>2.82</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 70,
            paddingVertical: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#446C24",
            borderStyle: "dashed",
          }}
        >
          <Text style={{ fontSize: 17, color: "#446C24" }}>Total</Text>
          <Text style={{ fontSize: 17, color: "#446C24" }}>37.18</Text>
        </View>
        <Image
          source={require("../assets/barcode.png")}
          style={{ height: 100, width: 300, alignSelf: "center" }}
        />
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserSelect")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 20,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#446C24",
  },
  button: {
    alignSelf: "center",
    width: "95%",
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
  buttonText: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
});
