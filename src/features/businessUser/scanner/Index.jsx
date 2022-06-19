import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";
import { useDispatch } from "react-redux";
import { errorMessage, setPoints } from "../../../store/actions/appActions";
import * as Animatable from "react-native-animatable";
import { StatusBar as Status } from "expo-status-bar";
import theme from "../../../Config/theme/Index";
import { useSelector } from "react-redux";

const ScannerBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const totalPointsBusiness = useSelector(state => state.appReducers.points)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [scanned]);

  useEffect(() => {
    setTimeout(() => setShow(!show), 1200);
  });

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    SecureStore.getItemAsync("jwt").then((token) => {
      console.log(data, "Hello");
      axios
        .post(
          `/qr/consume/${data}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(errorMessage({ show: true, message: res.data.message }));
          navigation.navigate("receipt", { receiptData: res.data });
          console.log(totalPointsBusiness);
          dispatch(setPoints({ actualPoints : res.data.availableUserPoints , totalPoints : totalPointsBusiness?.totalPoints + res.data.pointsConsumed}));
        })
        .catch((err) => {
          console.log(err?.response?.data?.message);
          dispatch(errorMessage({ show: true, message: err?.response?.data?.message }));
        });
    });
  };

  if (hasPermission === null) {
    return (
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 22,
              marginBottom: 15,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Requesting for permission to access camera.
          </Text>
        </View>
      </LinearGradient>
    );
  }
  if (hasPermission === false) {
    return (
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              color: theme.colors.white,
              fontSize: 22,
              marginBottom: 15,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          >
            Camera Permission denied Please go to settings and Grant it.
          </Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <>
      <Status style="inverted" />
      {scanned ? null : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[
            {
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "#000",
            },
          ]}
        >
          <Animatable.Image
            animation={show ? "fadeIn" : "fadeOut"}
            duration={800}
            source={require("../../../assets/QRScanner.png")}
            resizeMode="contain"
            style={{ width: 350, height: 350, alignSelf: "center" }}
          />
        </BarCodeScanner>
      )}
      {scanned && (
        <SafeAreaView style={{ flex: 1 }}>
          <LinearGradient
            colors={["#0a2c3c", "#00404c"]}
            style={styles.container}
          >
            <View style={styles.header}>
              <Image
                source={require("../../../assets/logoGreenbuilt.png")}
                resizeMode="contain"
                style={{ width: "95%", height: 350 }}
              />
            </View>
            <View style={styles.footer}>
              <Text style={styles.text1}>Wanna Scan Again</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setScanned(false)}
              >
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
      )}
    </>
  );
};

export default ScannerBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#140035",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: theme.colors.white,
    justifyContent: "space-evenly",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal:20,
    paddingBottom: 100,
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    color: theme.colors.primaryBg,
    paddingTop: 20,
  },
  button: {
    alignSelf: "center",
    width: "100%",
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: "bold",
    marginRight: 20,
    textAlign: "center",
  },
});
