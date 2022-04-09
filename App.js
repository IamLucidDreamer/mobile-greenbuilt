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
import Navigation from "./src/features/navigation/Navigation";
import theme from "./src/screens/theme";
import Errors from "./src/screens/components/Errors";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
