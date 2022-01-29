import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.screen)}
      style={[styles.btn, { backgroundColor: props.color }]}
    >
      <Text style={[styles.btnTxt, { color: props.txtColor }]}>
        {props.btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    paddingVertical: 15,
    width: "85%",
    shadowColor: "#fff",
    elevation: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
