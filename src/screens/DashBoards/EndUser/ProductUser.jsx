import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import theme from "../../theme";

const ProductUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileBar}>
          <Text style={styles.text1}>Product Name</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileUser")}
          ></TouchableOpacity>
        </View>
        <View style={styles.pointsView}></View>
      </View>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.productView}>
            <Text style={styles.text2}>Points : 200</Text>
            <Image
              source={require("../../../assets/Powerlogo.png")}
              resizeMode="contain"
              style={{ width: 180, height: 180 }}
            />
            <Text style={styles.text3}>
              The product Description will come here. The product Description
              will come here. The product Description will come here. The
              product Description will come here. v The product Description will
              come here. The product Description will come here.The product
              Description will come here.
            </Text>
            <Text style={styles.text3}>
              The product Description will come here. The product Description
              will come here. The product Description will come here. The
              product Description will come here. v The product Description will
              come here. The product Description will come here.The product
              Description will come here.
            </Text>
            <Text style={styles.text3}>
              The product Description will come here. The product Description
              will come here. The product Description will come here. The
              product Description will come here. v The product Description will
              come here. The product Description will come here.The product
              Description will come here.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  container1: {
    flex: 1,
    backgroundColor: theme.colors.green2,
    alignItems: "flex-start",
    justifyContent: "center",
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
    fontSize: 34,
    color: theme.colors.cream2,
  },
  pointsView: {
    width: "100%",
    paddingVertical: 2,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  text2: {
    fontSize: 34,
    color: theme.colors.dark2,
  },
  points: {
    fontSize: 40,
    paddingBottom: 5,
    fontWeight: "bold",
    color: theme.colors.dark2,
    textAlign: "center",
  },
  container2: {
    flex: 7,
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
    paddingHorizontal: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text3: {
    fontSize: 20,
    color: theme.colors.dark2,
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
