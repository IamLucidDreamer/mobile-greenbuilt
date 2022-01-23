import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import LoginScreen from "./src/screens/common/LoginScreen";
import StartScreen from "./src/screens/common/StartScreen";
import { StatusBar as Status } from "expo-status-bar";
import ForgotPassword from "./src/screens/common/ForgotPassword";
import SignUpEndUser from "./src/screens/common/SignUpEndUser";
import SignUpBusiness from "./src/screens/common/SignUpBusiness";
import Dashboard from "./src/screens/DashBoards/EndUser/Dashboard";
import Receipt from "./src/screens/Receipt";
import Products from "./src/screens/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSelect from "./src/screens/common/UserSelect";
import DashboardBusiness from "./src/screens/DashBoards/BusinessUnit/DashboardBusiness";
import ScannerUser from "./src/screens/DashBoards/EndUser/ScannerUser";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Log" component={LoginScreen} />
          <Stack.Screen name="SignUpEndUser" component={SignUpEndUser} />
          <Stack.Screen name="SignUpBusiness" component={SignUpBusiness} />
          <Stack.Screen name="Forgot" component={ForgotPassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="UserSelect" component={UserSelect} />
          <Stack.Screen name="ScannerUser" component={ScannerUser} />
          <Stack.Screen
            name="DashboardBusiness"
            component={DashboardBusiness}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
