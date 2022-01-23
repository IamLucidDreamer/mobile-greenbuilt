import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Products = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>back</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Text style={styles.text2}>Product Name Here</Text>
        <View
          style={{ height: 40, width: 40, backgroundColor: "#D1D1D6" }}
        ></View>
      </View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.text3}>Total Points</Text>
          <Text style={styles.text4}>890 Points</Text>
        </View>
        <View
          style={{ height: 30, width: 30, backgroundColor: "#28B446" }}
        ></View>
      </View>
      <View style={styles.container2}>
        <Text style={[styles.text3, { marginBottom: 15, fontSize: 35 }]}>
          Scans Chart
        </Text>
        <View style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            <View
              style={{ height: 30, width: 30, backgroundColor: "#28B446" }}
            ></View>
            <Text style={styles.text5}>Shirts</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            <View
              style={{ height: 30, width: 30, backgroundColor: "#28B446" }}
            ></View>
            <Text style={styles.text5}>T-Shirts</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ height: 30, width: 30, backgroundColor: "#28B446" }}
            ></View>
            <Text style={styles.text5}>Jeans</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.text2, { color: "#000" }]}>Scans</Text>
        <Text>See All</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/barcode.png")}
              style={{ height: 50, width: 42 }}
            />
            <View style={{ marginHorizontal: 15 }}>
              <Text style={styles.text1}>Puma T-Shirt</Text>
              <Text>15 Aug 2020</Text>
            </View>
          </View>
          <Text>350 pts.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/barcode.png")}
              style={{ height: 50, width: 42 }}
            />
            <View style={{ marginHorizontal: 15 }}>
              <Text style={styles.text1}>Jeans</Text>
              <Text>30 Aug 2020</Text>
            </View>
          </View>
          <Text>310 pts.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/barcode.png")}
              style={{ height: 50, width: 42 }}
            />
            <View style={{ marginHorizontal: 15 }}>
              <Text style={styles.text1}>Shirt</Text>
              <Text>13 Jun 2020</Text>
            </View>
          </View>
          <Text>280 pts.</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingHorizontal: 15,
  },
  text1: { fontSize: 18 },
  text2: { fontSize: 35, fontWeight: "bold", color: "#65A450" },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#1e6100",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  container2: {
    borderRadius: 20,
    backgroundColor: "#1e6100",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  text3: { fontSize: 25, color: "#fff" },
  text4: { fontSize: 42, color: "#28B446", fontWeight: "bold" },
  text5: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 15 },
  button: {
    alignSelf: "center",
    width: "50%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#446C24",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
});
