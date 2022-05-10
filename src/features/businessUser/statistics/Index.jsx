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
import React from "react";
import theme from "../../../Config/theme/Index";
import { StatusBar as Status } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityicons from "react-native-vector-icons/MaterialCommunityIcons";
import GradientText from "../../components/GradientText";

export const Statistics = ({ route, navigation }) => {
  const { productData } = route.params;
  console.log(productData, "Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <ScrollView>
        <Text style={styles.text1}>{productData.product.title}</Text>
        {/* <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <View>
              <Text style={{ color: "#fcfffc", fontSize: 15 }}>Price</Text>
              <Text
                style={{ color: "#fcfffc", fontSize: 17, fontWeight: "bold" }}
              >
                Rs. 800
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 25,
            }}
          >
            <Text style={{ color: theme.colors.white, fontSize: 24 }}>
              Points Earned
            </Text>
            <GradientText text={"1000"} fontSize={27} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#fcfffc", fontSize: 15 }}>Mfd. by</Text>
              <Text
                style={{ color: "#fcfffc", fontSize: 17, fontWeight: "bold" }}
              >
                Zeddlabz
              </Text>
            </View>
            <View>
              <Text style={{ color: "#fcfffc", fontSize: 15 }}>Mfd. on</Text>
              <Text
                style={{ color: "#fcfffc", fontSize: 17, fontWeight: "bold" }}
              >
                12/12/1212
              </Text>
            </View>
          </View>
        </View> */}
        <View style={styles.mainContainer}>
          <Text style={{ textAlign: "center", color: "#fcfffc", fontSize: 27 }}>
            Carbon Footprint Reduced
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <MaterialCommunityicons
              name="chemical-weapon"
              size={125}
              color={theme.colors.white}
            />
            <Text style={styles.cardText}>
              {0.935 * productData.product.points}
            </Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={{ textAlign: "center", color: "#fcfffc", fontSize: 27 }}>
            Water Saved
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <FontAwesome5
              name="hand-holding-water"
              size={125}
              color={theme.colors.white}
            />
            <Text style={styles.cardText}>
              {2.59 * productData.product.points} litr
            </Text>
          </View>
        </View>
        {/* <View style={[styles.mainContainer, { marginBottom: 15 }]}>
          <Text style={{ textAlign: "center", color: "#fcfffc", fontSize: 27 }}>
            Source of Energy
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <FontAwesome
              name="superpowers"
              size={125}
              color={theme.colors.white}
            />
            <GradientText text={"WindMill"} fontSize={40} />
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.white,
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
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 30,
    alignSelf: "flex-start",
  },
  cardText: { fontSize: 50, color: theme.colors.greenMain },
  mainContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.purple,
    borderRadius: 15,
  },
});
