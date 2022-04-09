import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../store/actions/user";
import { errorMessage } from "../../../store/actions/appActions";

const ScannerBusiness = () => {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    SecureStore.getItemAsync("jwt").then((token) => {
      console.log(data);
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
          dispatch(setUserDetails(res.data));
        })
        .catch((err) => {
          console.log("hello");
          console.log(err);
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
    <View style={styles.container}>
      {scanned ? null : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[
            StyleSheet.absoluteFillObject,
            { justifyContent: "center", alignContent: "center" },
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
        <>
          <View style={styles.header}>
            <Image
              source={require("../../../assets/Splash_Green_Built.png")}
              resizeMode="contain"
              style={{ width: 180, height: 180 }}
            />
          </View>
          <View style={styles.footer}>
            <View style={{ marginBottom: 25 }}>
              <GradientText
                text={"Looks like that's not one of Ours"}
                fontSize={40}
              />
            </View>
            <LinearGradient
              colors={["#1e6100", "#4bc834"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0.33 }}
              style={styles.button}
            >
              <TouchableOpacity onPress={() => setScanned(false)}>
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </>
      )}
    </View>
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
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fcfffc",
    justifyContent: "flex-start",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#29d38a",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 45,
    color: "#140035",
  },
  button: {
    alignSelf: "center",
    width: "90%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#29d38a",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    color: "#fcfffc",
    fontWeight: "bold",
    textAlign: "center",
  },
});
