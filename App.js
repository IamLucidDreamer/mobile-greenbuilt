import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { StatusBar as Status } from "expo-status-bar";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store/store";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import Navigation from "./src/screens/Navigation";
import theme from "./src/screens/theme";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Status style="dark" />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
});
