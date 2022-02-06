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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../theme";
import GradientText from "../../components/GradientText";
import { useSelector } from "react-redux";
import { StatusBar as Status } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";

const Dashboard = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const [scans, setScans] = useState([]);

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      axios
        .get(`/qr/history/consume/${user.data.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setScans(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <View style={styles.profileBar}>
        <Text style={styles.text1}>
          Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileUser")}>
          <FontAwesome
            name="user-circle"
            size={65}
            color={theme.colors.purple}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.pointsView}>
          <Text style={styles.text2}>Total Points</Text>
          <GradientText text={user.data.points} fontSize={60} />
        </View>
      </View>
      <View style={styles.container2}>
        <GradientText text={"SCANS"} fontSize={45} />
        <ScrollView>
          {scans.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.product]}
                onPress={() => {
                  navigation.navigate("ProductUser");
                }}
              >
                <View style={styles.productView}>
                  <Image
                    source={{ uri: data.product.photo }}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 15,
                      borderRadius: 20,
                    }}
                  />
                  <View>
                    <Text style={styles.productPoints}>
                      {data.product.points}
                    </Text>
                    <Text style={styles.productTitle}>
                      {data.product.title}
                    </Text>
                    <Text style={styles.productDesc}>
                      {data.product.description}
                    </Text>
                    <View style={styles.detailsView}>
                      <Text style={styles.details}>See Details</Text>
                      <FontAwesome
                        name="long-arrow-right"
                        size={20}
                        color={theme.colors.dark2}
                        style={{ paddingHorizontal: 10 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button}
      >
        <TouchableOpacity onPress={() => navigation.navigate("ScannerUser")}>
          <MaterialIcons
            name="qr-code-scanner"
            color={theme.colors.white}
            size={50}
          />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container1: {
    marginHorizontal: 20,
    backgroundColor: theme.colors.purple,
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  profileBar: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 24,
    marginTop: 10,
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
    fontSize: 24,
    color: theme.colors.white,
    textAlign: "center",
  },
  points: {
    fontSize: 40,
    paddingBottom: 5,
    fontWeight: "bold",
    color: theme.colors.dark2,
    textAlign: "center",
  },
  container2: {
    flex: 3,
    paddingHorizontal: 20,
  },
  product: {
    marginBottom: 15,
    backgroundColor: theme.colors.purple,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#fff",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  productView: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text3: {
    fontSize: 35,
    color: theme.colors.white,
    paddingVertical: 10,
  },
  productPoints: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.colors.white,
  },
  productTitle: {
    fontSize: 20,
    color: theme.colors.white,
    fontWeight: "bold",
  },
  productDesc: {
    fontSize: 15,
    color: theme.colors.white,
  },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  details: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.white,
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
