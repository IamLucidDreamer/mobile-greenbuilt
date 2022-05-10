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

const ScannerBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

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
          navigation.navigate("Dashboard");
          dispatch(setPoints(res.data.availableUserPoints));
        })
        .catch((err) => {
          console.log(err?.response?.data?.message);
          setMessage(err?.response?.data?.message);
        });
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
          <Image
            source={require("../../../assets/QRScanner.png")}
            resizeMode="contain"
            style={{ width: 350, height: 350, alignSelf: "center" }}
          />
        </BarCodeScanner>
      )}
      {scanned && (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require("../../../assets/startScreenBackground.png")}
            resizeMode="cover"
            style={styles.container}
          >
            <View style={styles.header}>
              <Animatable.Image
                animation="fadeInUpBig"
                duration={2000}
                source={require("../../../assets/logoGreenbuilt.png")}
                resizeMode="contain"
                style={{ width: "95%", height: 350 }}
              />
            </View>
            <View style={styles.footer}>
              <Text style={styles.text1}>Something is not right!</Text>
              <Text style={[styles.text1, { fontWeight: "bold" }]}>
                {message}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setScanned(false)}
              >
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("DashboardBusiness")}
              >
                <Text style={styles.buttonText}>Back to Dashboard</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingVertical: 30,
  },
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 45,
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
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
