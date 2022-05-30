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

const DashboardBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const points = useSelector((state) => state.appReducers.points);
  const [scans, setScans] = useState([]);

  console.log(user);

  const date = new Date();
  const fullDate = `${date.getDate()}  , ${date.getFullYear()}`;
  const firstName = (str) => str.split(/\|/).map((s) => s.split(/\s+/)[0]);

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
  }, [points]);

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
              source={{
                uri: "data:image/png;base64,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",
              }}
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
          <TouchableOpacity
            onPress={() => dispatch(logout())}
            style={{
              width: 32,
              height: 32,
              backgroundColor: "#273d4b",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 19, color: "#fff" }}>lll</Text>
          </TouchableOpacity>
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

        <Text
          style={{
            color: "#fff",
            marginTop: 15,
            marginLeft: 30,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Other Stats
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
            }}
            animation="fadeInUpBig"
          >
            <Text
              style={{ color: "#e1e1e1", fontSize: 13, textAlign: "center" }}
            >
              Total CO2 Saved
            </Text>
            <Text
              style={{
                fontSize: 28,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {Math.round(points * 0.935)}
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
            }}
            animation="fadeInUpBig"
          >
            <Text
              style={{ color: "#e1e1e1", fontSize: 13, textAlign: "center" }}
            >
              Total H2O Saved
            </Text>
            <Text
              style={{
                fontSize: 28,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {Math.round(points * 2.59)}
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
            }}
            animation="fadeInUpBig"
          >
            <Text
              style={{ color: "#e1e1e1", fontSize: 13, textAlign: "center" }}
            >
              Total Energy User
            </Text>
            <Text
              style={{
                fontSize: 28,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {Math.round(points * 2.59)}
            </Text>
          </View>
        </ScrollView>

        <View style={styles.container2}>
          <Text style={styles.scansText}>Recent Scans</Text>
          <ScrollView>
            {scans.map((data, index) => {
              {
                return data.product !== null ? (
                  <TouchableOpacity
                    key={index}
                    style={[styles.product]}
                    onPress={() => {
                      navigation.navigate("statistics", { productData: data });
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
                      }}
                      resizeMode="contain"
                      style={{
                        width: "25%",
                        height: "100%",
                        marginRight: 10,
                        borderRadius: 20,
                      }}
                    />
                    <View style={styles.productView}>
                      <Text style={styles.productTitle}>
                        {data.product.title}
                      </Text>
                      <View style={styles.detailsView}>
                        <Text style={styles.details}>15-aug-2022</Text>
                      </View>
                    </View>
                    <Text style={styles.productPoints}>
                      {data.product.points}
                    </Text>
                  </TouchableOpacity>
                ) : null;
              }
            })}
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
