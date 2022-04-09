import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import { StatusBar as Status } from "expo-status-bar";
import GradientText from "../../../components/GradientText";
import theme from "../../../../Config/theme/Index";

export const VerifyOtp = (props) => {
  async function verifyOtp(otp) {
    try {
      await props.confirmObj.confirm(otp);
      props.changeFormNumber(3);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  const ForgotSchema = Yup.object().shape({
    otp: Yup.string().required("Required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GradientText text={"Enter the OTP"} fontSize={60} />
      </View>

      <View style={styles.footer}>
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={ForgotSchema}
          onSubmit={(values) => {
            console.log(values);
            verifyOtp(values.otp);
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
                  OTP
                </Text>
                <View style={styles.inputField}>
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
                    onChangeText={formProps.handleChange("otp")}
                    onBlur={formProps.handleBlur("otp")}
                    value={formProps.values.otp}
                  />
                  {formProps.errors.otp && formProps.touched.otp ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.otp}
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
                <Text style={{ fontSize: 16, paddingVertical: 10 }}>
                  OTP sent Successfully to {props.phoneNumber}
                </Text>
                <TouchableOpacity onPress={() => props.changeFormNumber(1)}>
                  <Text style={{ fontSize: 16 }}>Change Phone Number</Text>
                </TouchableOpacity>
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
    flex: 3,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
  },
  footer: {
    flex: 2,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 25,
    margin: 10,
  },
  text1: {
    fontSize: 50,
    marginBottom: 40,
    paddingHorizontal: 20,
    color: theme.colors.dark2,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
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
  button: {
    alignSelf: "center",
    width: 350,
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
});
