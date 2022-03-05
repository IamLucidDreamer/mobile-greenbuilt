import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { StatusBar as Status } from "expo-status-bar";
import Feather from "react-native-vector-icons/Feather";
import GradientText from "../../components/GradientText";
import QRCode from "react-native-qrcode-svg";
import theme from "../../theme";

const Receipt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <ScrollView style={styles.container1}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <GradientText text={"Your CO2 Footprint Receipt"} fontSize={25} />
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
          <Text
            style={{
              fontSize: 17,
              color: theme.colors.purple,
              marginBottom: 30,
            }}
          >
            22.02.2020
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: theme.colors.purple,
              padding: 10,
              marginBottom: 30,
              textAlign: "center",
              fontWeight: "bold",
              borderBottomWidth: 1,
              borderColor: theme.colors.purple,
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
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              Your Co2 Footprint
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              40.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 70,
            }}
          >
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              Reduced
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              2.82
            </Text>
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
              borderColor: theme.colors.purple,
              borderStyle: "dashed",
            }}
          >
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              Total
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              37.18
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <QRCode
              value={"any"}
              size={250}
              enableLinearGradient={true}
              linearGradient={["#4bc834", "#1e6100"]}
            />
          </View>
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
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
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
