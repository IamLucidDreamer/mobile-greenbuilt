import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Errors = (props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text1}>{props.message}</Text>
    </View>
  );
};

export default Errors;

const styles = StyleSheet.create({
  box: {
    width: "95%",
    marginTop: 5,
    alignSelf: "center",
    backgroundColor: "#fcfffc",
    position: "absolute",
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  text1: {
    fontSize: 18,
    color: "#000",
  },
});
