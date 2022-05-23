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
import theme from "../../../Config/theme/Index";

const Receipt = ({ route ,navigation }) => {
  
    const {receiptData} = route.params
    console.log(receiptData , "Hello");

    const date =  new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#F2F2F7",
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginHorizontal:10
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: theme.colors.purple,
              marginBottom: 30,
            }}
          >
            {`${date}-${month+1}-${year}`}
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
              marginBottom:10,
            }}
          >
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              Green Energy Consumed
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              {receiptData?.data?.points} unit
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              CO2 offset
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              {receiptData?.data?.points * 0.935}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 80,
            }}
          >
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
              H2O Saved
            </Text>
            <Text style={{ fontSize: 17, color: theme.colors.purple }}>
            {receiptData?.data?.points * 2.59}
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
              How to Calculate
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DashboardBusiness")}
          >
            <Text style={styles.buttonText}>Dashboard</Text>
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
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#446C24",
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
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
