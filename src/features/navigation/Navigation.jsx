import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { useSelector } from "react-redux";
import isEmpty from "../../utils/isEmpty";
import { StatusBar as Status } from "expo-status-bar";
import Antdesign from "react-native-vector-icons/AntDesign";

import theme from "../../Config/theme/Index";

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
import Receipt from "../businessUser/receipts/Index";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const userObj = useSelector((state) => state.user);
  const isApproved = isEmpty(userObj?.data?.isApproved);

  return (
    <NavigationContainer>
      <Status style="inverted" />

      {isEmpty(userObj) ? (
        //Unauthenticated Stack
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="userSelect" component={ChooseUser} />
          <Stack.Screen name="userSignUp" component={SignUpEndUser} />
        </Stack.Navigator>
      ) : !isEmpty(userObj) && userObj.data.role === 1 ? (
        //User Stack
        <>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="userScanner" component={ScannerUser} />
        </>
      ) : //Business Stack
      !isEmpty(userObj) && isApproved ? (
        <>
          {/* <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="DashboardBusiness"
              component={DashboardBusiness}
            />
            <Stack.Screen name="scannerBusiness" component={ScannerBusiness} />
            <Stack.Screen name="statistics" component={Statistics} />
            <Stack.Screen name="receipt" component={Receipt} />
          </Stack.Navigator> */}
          <Tab.Navigator
            initialRouteName="Home"
            activeColor={theme.colors.primaryGreen}
            inactiveColor={theme.colors.primaryBg}
            shifting={false}
            barStyle={{
              backgroundColor: theme.colors.white,
              position: "absolute",
              overflow: "hidden",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingVertical: 2,
            }}
          >
            <Tab.Screen
              name="Home"
              component={DashboardBusiness}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <Antdesign name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="History"
              component={ScannerBusiness}
              options={{
                tabBarLabel: "History",
                tabBarIcon: ({ color }) => (
                  <Antdesign name="clockcircleo" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Scan"
              component={ScannerBusiness}
              options={{
                tabBarLabel: "Scanner",
                tabBarIcon: ({ color }) => (
                  <Antdesign name="qrcode" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Community"
              component={ScannerBusiness}
              options={{
                tabBarLabel: "support",
                tabBarIcon: ({ color }) => (
                  <Antdesign name="contacts" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ScannerBusiness}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <Antdesign name="user" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <Stack.Screen
          name="Verificationscreen"
          component={VerificationPending}
        />
      )}
    </NavigationContainer>
  );
}
