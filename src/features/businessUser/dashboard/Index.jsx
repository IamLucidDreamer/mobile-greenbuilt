import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../Config/theme/Index";
import GradientText from "../../components/GradientText";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar as Status } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";
import { BlurView } from "expo-blur";
import { logout } from "../../../store/actions/user";
import * as Animatable from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const DashboardBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const points = useSelector((state) => state.appReducers.points);
  const [scans, setScans] = useState([]);

  console.log(user);

  const date = new Date();
  const fullDate = `${date.getDate()}  , ${date.getFullYear()}`;
  const firstName = (str) => str.split(/\|/).map((s) => s.split(/\s+/)[0]);

  return (
    <SafeAreaView style={styles.container}>
      <Status style="light" />
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            marginVertical: 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/logoGreenbuilt1.png")}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View
              style={{
                justifyContent: "center",
                marginHorizontal: 5,
                marginLeft: 20,
              }}
            >
              <Text
                style={{ color: "#95a4ae", fontSize: 15, fontWeight: "bold" }}
              >
                {fullDate}
              </Text>
              <Text style={{ fontSize: 25, color: "#fff" }}>
                Hello ,{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {firstName(user?.data?.name)}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            shadowColor: "#00ff7f",
            elevation: 12,
          }}
        >
          <Animatable.View
            style={{
              width: 280,
              height: 280,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 140,
              borderWidth: 25,
              borderColor: "#41ce8c",
            }}
            animation="flash"
            duration={1500}
            delay={800}
          >
            <Animatable.Text
              animation={"fadeIn"}
              duration={500}
              delay={2200}
              style={{ color: "#8597a0", fontSize: 18, textAlign: "center" }}
            >
              Total Points
            </Animatable.Text>
            <Animatable.Text
              duration={800}
              delay={2500}
              animation={"fadeIn"}
              style={{
                fontSize: 40,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {points}
            </Animatable.Text>
          </Animatable.View>
        </View>

        <View>
          <Text
            style={{
              color: "#fff",
              marginVertical: 15,
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total Impact
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              marginVertical: 20,
              marginHorizontal: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 160,
                height: 190,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "#032b35",
                shadowColor: "#00ff7f",
                elevation: 2,
                marginHorizontal: 10,
                paddingLeft: 20,
              }}
              animation="fadeInUpBig"
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.colors.primaryGreen,
                  height: 60,
                  width: 70,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              >
                <MaterialCommunityIcons
                  name="molecule-co2"
                  size={60}
                  color={theme.colors.white}
                />
              </View>
              <Text
                style={{ color: "#e1e1e1", fontSize: 13, textAlign: "left" }}
              >
                Total CO2 Saved
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {Math.round(points * 0.935)}{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Kgs
                </Text>
              </Text>
            </View>
            <View
              style={{
                width: 160,
                height: 190,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "#032b35",
                shadowColor: "#00ff7f",
                elevation: 2,
                marginHorizontal: 10,
                paddingLeft: 20,
              }}
              animation="fadeInUpBig"
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#c9463c",
                  height: 60,
                  width: 70,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              >
                <Ionicons name="water" size={50} color={theme.colors.white} />
              </View>
              <Text
                style={{ color: "#e1e1e1", fontSize: 13, textAlign: "left" }}
              >
                Total H2O Saved
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {Math.round(points * 2.59)}{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  litres
                </Text>
              </Text>
            </View>
            <View
              style={{
                width: 160,
                height: 190,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "#032b35",
                shadowColor: "#00ff7f",
                elevation: 2,
                marginHorizontal: 10,
                paddingLeft: 20,
              }}
              animation="fadeInUpBig"
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#dbd642",
                  height: 60,
                  width: 70,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              >
                <FontAwesome
                  name="envira"
                  size={40}
                  color={theme.colors.white}
                />
              </View>
              <Text
                style={{ color: "#e1e1e1", fontSize: 13, textAlign: "left" }}
              >
                Total Energy Used
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {Math.round(points * 2.59)}{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Units
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DashboardBusiness;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#000",
  },
  container1: {
    marginHorizontal: 10,
    backgroundColor: theme.colors.purple,
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  profileBar: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 20,
    color: theme.colors.purple,
  },
  pointsView: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text2: {
    fontSize: 20,
    color: theme.colors.white,
    textAlign: "center",
  },
  points: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.greenMain,
    textAlign: "center",
  },
  scansText: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.purple,
    marginVertical: 12,
  },
  container2: {
    flex: 3,
    paddingHorizontal: 10,
  },
  product: {
    marginBottom: 15,
    borderWidth: 2,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 15,
    shadowColor: "#140035",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productView: {
    width: "55%",
  },
  text3: {
    fontSize: 35,
    color: theme.colors.purple,
    paddingVertical: 10,
  },
  productPoints: {
    width: "15%",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: theme.colors.greenMain,
  },
  productTitle: {
    fontSize: 20,
    color: theme.colors.purple,
    fontWeight: "bold",
  },

  details: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.purple,
  },
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
    backgroundColor: theme.colors.dark2,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
});
