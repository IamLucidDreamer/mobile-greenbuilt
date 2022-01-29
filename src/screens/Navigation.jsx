import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components Import
import StartScreen from "./common/StartScreen";
import LoginScreen from "./common/LoginScreen";
import SignUpBusiness from "./common/SignUpBusiness";
import SignUpEndUser from "./common/SignUpEndUser";
import UserSelect from "./common/UserSelect";
import ForgotPassword from "./common/ForgotPassword";
import Dashboard from "./DashBoards/EndUser/Dashboard";
import DashboardBusiness from "./DashBoards/BusinessUnit/DashboardBusiness";
import GenerateQR from "./DashBoards/BusinessUnit/GenerateQR";
import ScannerUser from "./DashBoards/EndUser/ScannerUser";
import Receipt from "./Receipt";
import Products from "./Products";
import ScannerBusiness from "./DashBoards/BusinessUnit/ScannerBusiness";
import { useSelector } from "react-redux";
import isEmpty from "../utils/isEmpty";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const userObj = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isEmpty(userObj) ? (
          //Unauthenticated Stack
          <>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="UserSelect" component={UserSelect} />
            <Stack.Screen name="SignUser" component={SignUpEndUser} />
            <Stack.Screen name="SignBusiness" component={SignUpBusiness} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
          </>
        ) : !isEmpty(userObj) && userObj.data.role === 1 ? (
          //User Stack
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ScannerUser" component={ScannerUser} />
          </>
        ) : (
          //Business Stack
          <>
            <Stack.Screen
              name="DashboardBusiness"
              component={DashboardBusiness}
            />
            <Stack.Screen name="GenerateQR" component={GenerateQR} />
            <Stack.Screen name="ScannerBusiness" component={ScannerBusiness} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
