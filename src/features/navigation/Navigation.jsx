import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import isEmpty from "../../utils/isEmpty";
import { StatusBar as Status } from "expo-status-bar";

// Import Screens
import StartScreen from "../startScreen/Index";
import LoginScreen from "../auth/login/Index";
import ChooseUser from "../auth/chooseUser/Index";
import SignUpEndUser from "../auth/signUpUser/Index";

import Dashboard from "../endUser/dashboard/Index";
import ScannerUser from "../endUser/scanner/Index";

import DashboardBusiness from "../businessUser/dashboard/Index";
import ScannerBusiness from "../businessUser/scanner/Index";
import { Statistics } from "../businessUser/statistics/Index";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const userObj = useSelector((state) => state.user);
  const isApproved = isEmpty(userObj?.data?.isApproved);

  return (
    <NavigationContainer>
      <Status style="inverted" />
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
            <Stack.Screen name="userSelect" component={ChooseUser} />
            <Stack.Screen name="userSignUp" component={SignUpEndUser} />
          </>
        ) : !isEmpty(userObj) && userObj.data.role === 1 ? (
          //User Stack
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="userScanner" component={ScannerUser} />
          </>
        ) : //Business Stack
        !isEmpty(userObj) && isApproved ? (
          <>
            <Stack.Screen
              name="DashboardBusiness"
              component={DashboardBusiness}
            />
            <Stack.Screen name="scannerBusiness" component={ScannerBusiness} />
            <Stack.Screen name="statistics" component={Statistics} />
          </>
        ) : (
          <Stack.Screen
            name="Verificationscreen"
            component={VerificationPending}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
