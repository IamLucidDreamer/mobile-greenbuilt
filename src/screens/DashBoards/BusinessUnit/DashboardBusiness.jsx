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
import theme from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const DashboardBusiness = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileBar}>
          <Text style={styles.text1}>
            Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileBusiness");
            }}
          >
            <FontAwesome
              name="user-circle"
              size={65}
              color={theme.colors.dark2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pointsView}>
          <Text style={styles.text2}>Total Points</Text>
          <Text style={styles.points}>{user.data.points}</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text3}>HISTORY</Text>
        <ScrollView>
          <TouchableOpacity
            style={styles.product}
            onPress={() => {
              navigation.navigate("ProductBusiness");
            }}
          >
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
          <TouchableOpacity style={styles.product}>
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
          <TouchableOpacity style={styles.product}>
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
          <TouchableOpacity style={styles.product}>
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
          <TouchableOpacity style={styles.product}>
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
          <TouchableOpacity style={styles.product}>
            <View style={styles.productView}>
              <Image
                source={require("../../../assets/Powerlogo.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <Text style={styles.productPoints}>200 points</Text>
                <Text style={styles.productTitle}>Product Name</Text>
                <Text style={styles.productDesc}>
                  Product Description wil come here.
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
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("GenerateQR")}
        style={styles.button1}
      >
        <MaterialCommunityIcons
          name="qrcode-edit"
          color={theme.colors.cream}
          size={50}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ScannerBusiness")}
        style={styles.button2}
      >
        <MaterialIcons
          name="qr-code-scanner"
          color={theme.colors.cream}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green2,
  },
  container1: {
    flex: 1,
    backgroundColor: theme.colors.cream,
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
    shadowColor: "#fff",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  profileBar: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 24,
    marginTop: 10,
    color: theme.colors.dark2,
  },
  pointsView: {
    width: "100%",
    paddingVertical: 2,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  text2: {
    fontSize: 24,
    color: theme.colors.dark2,
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
    backgroundColor: theme.colors.cream,
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
    color: theme.colors.dark2,
  },
  productTitle: {
    fontSize: 20,
    color: theme.colors.dark2,
    fontWeight: "bold",
  },
  productDesc: {
    fontSize: 15,
    color: theme.colors.dark2,
  },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  details: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.dark2,
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
