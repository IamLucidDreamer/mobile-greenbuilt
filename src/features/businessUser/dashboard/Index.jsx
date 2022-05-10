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
import { logout } from "../../../store/actions/user";

const DashboardBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const points = useSelector((state) => state.appReducers.points);
  const [scans, setScans] = useState([]);

  console.log(points);

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
      <Status style="dark" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/logoGreenbuilt.png")}
          resizeMode="contain"
          style={{ width: 200, height: 60 }}
        />
      </View>
      <View style={styles.profileBar}>
        <Text style={styles.text1}>
          Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
        </Text>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <FontAwesome
            name="user-circle"
            size={35}
            color={theme.colors.purple}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.pointsView}>
          <Text style={styles.text2}>Total Points</Text>
          <Text style={styles.points}>{points}</Text>
        </View>
      </View>
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
      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={styles.button}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("scannerBusiness")}
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
