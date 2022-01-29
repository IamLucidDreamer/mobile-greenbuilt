import React, { useState } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardBusiness = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello, Name</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <GradientText text={"Home"} fontSize={45} />
        <View
          style={{ height: 40, width: 40, backgroundColor: "#D1D1D6" }}
        ></View>
      </View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.text3}>Total Points</Text>
          <GradientText text={"12050 Points"} fontSize={50} />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <GradientText text={"History"} fontSize={45} />
          <Text>See All</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/barcode.png")}
                style={{ height: 50, width: 42 }}
              />
              <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.text1}>Puma T-Shirt</Text>
                <Text>15 Aug 2020</Text>
              </View>
            </View>
            <Text>350 pts.</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/barcode.png")}
                style={{ height: 50, width: 42 }}
              />
              <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.text1}>Jeans</Text>
                <Text>30 Aug 2020</Text>
              </View>
            </View>
            <Text>310 pts.</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/barcode.png")}
                style={{ height: 50, width: 42 }}
              />
              <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.text1}>Shirt</Text>
                <Text>13 Jun 2020</Text>
              </View>
            </View>
            <Text>280 pts.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button1}
      >
        <TouchableOpacity onPress={() => navigation.navigate("GenerateQR")}>
          <MaterialCommunityIcons
            name="qrcode-edit"
            color={"#fcfffc"}
            size={50}
          />
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ScannerBusiness")}
        >
          <MaterialIcons name="qr-code-scanner" color={"#fcfffc"} size={50} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default DashboardBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text1: { fontSize: 18, marginTop: 10 },
  text2: { fontSize: 35, fontWeight: "bold", color: "#65A450" },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#140035",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  container2: {
    borderRadius: 20,
    backgroundColor: "#1e6100",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
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
  button1: {
    position: "absolute",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 150,
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
