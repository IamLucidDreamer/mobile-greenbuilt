import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar as Status } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";
import GradientText from "../../components/GradientText";
import { LinearGradient } from "expo-linear-gradient";
import { logout } from "../../../store/actions/user";

const DashboardBusiness = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const [scans, setScans] = useState([]);
  const [generate, setGenerate] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

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

  if (show) {
    SecureStore.getItemAsync("jwt").then((token) => {
      axios
        .get(`/qr/history/generate/${user.data.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setGenerate(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <View style={styles.profileBar}>
        <Text style={styles.text1}>
          Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
        </Text>
        <TouchableOpacity onPress={() => dispatch(logout())}>
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
          <GradientText text={"11,120"} fontSize={60} />
        </View>
      </View>
      <View style={styles.container2}>
        <GradientText text={"HISTORY"} fontSize={45} />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={() => setShow(false)}>
            <GradientText text={"SCANS"} fontSize={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShow(true)}>
            <GradientText text={"GENERATED"} fontSize={25} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={[styles.product]}
            onPress={() => {
              navigation.navigate("ProductUser");
            }}
          >
            <View style={styles.productView}>
              <Image
                source={{
                  uri: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCGFDWZ1AnbBoUxBJEgz3SUtUWbAyJcR032wf6yZwSfh9il5LrvWnDt2NWcAGLJ8p-afT0CISkOs2ZJjQw_m70qoNeOFpJaLtvUniPlqMgx5x7zaaq--93GQ&usqp=CAE",
                }}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 100,
                  marginRight: 15,
                  borderRadius: 20,
                  backgroundColor: theme.colors.white,
                }}
              />
              <View>
                <Text style={styles.productPoints}>500</Text>
                <Text style={styles.productTitle}>Puma Jeans</Text>
                <Text style={styles.productDesc}>
                  This is a high Quality Product
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
          <TouchableOpacity
            style={[styles.product]}
            onPress={() => {
              navigation.navigate("ProductUser");
            }}
          >
            <View style={styles.productView}>
              <Image
                source={{
                  uri: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzDZssYoXP-nwE3y9tq06dxMnuuKtOhcFUO3l3e-psSNGsnreohuA3wvX3-hjlx4rBdiVyvbb-tp0O&usqp=CAc",
                }}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 100,
                  marginRight: 15,
                  borderRadius: 20,
                  backgroundColor: theme.colors.white,
                }}
              />
              <View>
                <Text style={styles.productPoints}>200</Text>
                <Text style={styles.productTitle}>Nike Shoes</Text>
                <Text style={styles.productDesc}>
                  Product made by green Energy.
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
          {!show
            ? scans.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.product]}
                    onPress={() => {
                      navigation.navigate("ProductUser");
                    }}
                  >
                    <View style={styles.productView}>
                      {/* <Image
                        source={{ uri: data.product.photo }}
                        resizeMode="contain"
                        style={{
                          width: 100,
                          height: 100,
                          marginRight: 15,
                          borderRadius: 20,
                        }} 
                      />*/}
                      <View>
                        {/* <Text style={styles.productPoints}>
                          {data.product.points}
                        </Text>
                        <Text style={styles.productTitle}>
                          {data.product.title}
                        </Text>
                        <Text style={styles.productDesc}>
                          {data.product.description}
                        </Text> */}
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
              })
            : generate.map((data, index) => {
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
        style={styles.button1}
      >
        <TouchableOpacity onPress={() => navigation.navigate("GenerateQR")}>
          <MaterialCommunityIcons
            name="qrcode-edit"
            color={theme.colors.white}
            size={50}
          />
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button2}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ScannerBusiness")}
        >
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

export default DashboardBusiness;

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
    fontSize: 40,
    color: theme.colors.cream2,
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
  button1: {
    position: "absolute",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 140,
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
  button2: {
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
