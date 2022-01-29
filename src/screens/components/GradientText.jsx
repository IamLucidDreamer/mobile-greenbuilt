import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = (props) => {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontSize: props.fontSize,
            fontWeight: "bold",
            backgroundColor: "#00000000",
          }}
        >
          {props.text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#1e6100", "#4bc834"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        styles={{ flex: 1 }}
      >
        <Text
          style={{ fontSize: props.fontSize, fontWeight: "bold", opacity: 0 }}
        >
          {props.text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

const styles = StyleSheet.create({});
