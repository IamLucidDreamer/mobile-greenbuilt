import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import theme from "../../../../Config/theme/Index";
import GradientText from "../../../components/GradientText";
import { Formik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { countryCode } from "../../../../utils/phoneNumber";
import { LinearGradient } from "expo-linear-gradient";
import auth from "@react-native-firebase/auth";

export const SendOtp = (props) => {
  const [label, setLabel] = useState({
    country: "India",
    dialCode: "+91",
  });

  const getOtp = async (phoneNumber) => {
    console.log("Running");
    const consfirmation = await auth().signInWithPhoneNumber(
      `${label.dialCode}${phoneNumber}`
    );
    if (consfirmation) {
      props.changeFormNumber(2);
      props.setPhoneNumberFunction(`${label.dialCode}${phoneNumber}`);
      props.setConfirmObjFunction(consfirmation);
    }
  };

  const UserSignSchema = Yup.object().shape({
    phoneNumber: Yup.string(),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GradientText text={"Enter Phone Number"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={UserSignSchema}
          onSubmit={(values) => {
            const { name, email, phoneNumber } = values;
            console.log(values);
            getOtp(phoneNumber);
          }}
        >
          {(formProps) => (
            <ScrollView>
              <View style={styles.inputContainer}>
                <Text
                  style={{
                    textAlign: "left",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                    fontSize: 20,
                    marginBottom: -23,
                    zIndex: 10,
                    backgroundColor: "#fff",
                    paddingHorizontal: 10,
                  }}
                >
                  Choose Country
                </Text>
                <View style={styles.inputField}>
                  <Picker
                    style={[styles.textInput]}
                    onValueChange={(value) => {
                      setLabel(value);
                    }}
                  >
                    <Picker.Item
                      label={label.country}
                      value={label.dialCode}
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="India"
                      value={{
                        country: "India",
                        dialCode: "+91",
                      }}
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    {countryCode.map((data, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={data.name}
                          value={{
                            country: data.name,
                            dialCode: data.dial_code,
                          }}
                          style={{ fontSize: 20, fontWeight: "bold" }}
                        />
                      );
                    })}
                  </Picker>
                  {formProps.errors.industryType &&
                  formProps.touched.industryType ? (
                    <Text style={{ color: "#8890A6" }}>
                      {formProps.errors.industryType}
                    </Text>
                  ) : null}
                </View>
                <Text
                  style={{
                    textAlign: "left",
                    alignSelf: "flex-start",
                    marginLeft: 15,
                    fontSize: 20,
                    marginBottom: -23,
                    zIndex: 10,
                    backgroundColor: "#fff",
                    paddingHorizontal: 10,
                  }}
                >
                  Phone Number
                </Text>
                <View style={styles.inputField}>
                  <Text
                    style={{
                      borderRightWidth: 1,
                      paddingRight: 10,
                      fontSize: 22,
                    }}
                  >
                    {label.dialCode}
                  </Text>
                  <TextInput
                    placeholder=""
                    placeholderTextColor={theme.colors.dark2}
                    style={[
                      styles.textInput,
                      {
                        color: theme.colors.dark2,
                      },
                    ]}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    onChangeText={formProps.handleChange("phoneNumber")}
                    onBlur={formProps.handleBlur("phoneNumber")}
                    value={formProps.values.phoneNumber}
                  />
                  {formProps.errors.phoneNumber &&
                  formProps.touched.phoneNumber ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.phoneNumber}
                    </Text>
                  ) : null}
                </View>
                <LinearGradient
                  colors={["#1e6100", "#4bc834"]}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 0, y: 0.33 }}
                  style={styles.button}
                >
                  <TouchableOpacity
                    onPress={formProps.handleSubmit}
                    type="submit"
                    style={styles.btn}
                  >
                    <Text style={styles.buttonText}>Verify</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.lognin}>
                  <Text style={styles.logtxt}>Already have an Account ? </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Login")}
                  >
                    <Text style={[styles.logtxt, { fontWeight: "bold" }]}>
                      Log In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
  },
  header: {
    flex: 1,
    backgroundColor: theme.colors.purple,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  footer: {
    flex: 2,
    paddingTop: 30,
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    margin: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  text1: {
    fontSize: 45,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: theme.colors.dark2,
  },
  inputField: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    alignItems: "center",
    height: 60,
    marginTop: 10,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderBottomColor: "#140035",
  },
  textInput: {
    flex: 1,
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    color: "#05375a",
  },
  forgotbtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  forgottext: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    alignSelf: "center",
    width: "90%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#29d38a",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    color: "#fcfffc",
    fontWeight: "bold",
    textAlign: "center",
  },
  lognin: {
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logtxt: {
    color: theme.colors.purple,
    fontSize: 15,
  },
});
