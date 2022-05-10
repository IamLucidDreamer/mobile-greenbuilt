import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import theme from "../../../../Config/theme/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { countryCode } from "../../../../utils/phoneNumber";
import auth from "@react-native-firebase/auth";
import * as Animatable from "react-native-animatable";

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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../../assets/startScreenBackground.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInUpBig"
            duration={800}
            source={require("../../../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 100 }}
          />
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
                <KeyboardAvoidingView style={styles.inputContainer}>
                <Text style={styles.text1}>Create A New Account</Text>
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
                  <TouchableOpacity
                    onPress={formProps.handleSubmit}
                    type="submit"
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Verify</Text>
                  </TouchableOpacity>
                  <View style={styles.lognin}>
                    <Text style={styles.logtxt}>
                      Already have an Account ?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Login")}
                    >
                      <Text style={[styles.logtxt, { fontWeight: "bold" }]}>
                        Log In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            )}
          </Formik>
        </View>
      </ImageBackground>
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
    height: 155,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: theme.colors.white,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 45,
    alignSelf: "flex-start",
    marginBottom: 20,
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
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.greenMain,
    borderRadius: 5,
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
