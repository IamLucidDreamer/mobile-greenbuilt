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
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../theme";
import { StatusBar as Status } from "expo-status-bar";

const OtpScreen = ({ navigation }) => {
  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logoGreenbuilt.png")}
          resizeMode="contain"
          style={{ width: 350, height: 350 }}
        />
        <GradientText text={"Enter the OTP"} fontSize={60} />
      </View>

      <View style={styles.footer}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {(formProps) => (
            <View style={styles.inputContainer}>
              <Text
                style={{
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 15,
                  fontSize: 20,
                  zIndex: 10,

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
                      borderWidth: 2,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    },
                  ]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                <TextInput
                  placeholder=""
                  placeholderTextColor={theme.colors.dark2}
                  style={[
                    styles.textInput,
                    {
                      color: theme.colors.dark2,
                      borderWidth: 2,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    },
                  ]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                <TextInput
                  placeholder=""
                  placeholderTextColor={theme.colors.dark2}
                  style={[
                    styles.textInput,
                    {
                      color: theme.colors.dark2,
                      borderWidth: 2,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    },
                  ]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                <TextInput
                  placeholder=""
                  placeholderTextColor={theme.colors.dark2}
                  style={[
                    styles.textInput,
                    {
                      color: theme.colors.dark2,
                      borderWidth: 2,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    },
                  ]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                {formProps.errors.email && formProps.touched.email ? (
                  <Text style={{ color: theme.colors.dark2 }}>
                    {formProps.errors.email}
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
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
  },
  header: {
    flex: 2,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
  },
  footer: {
    flex: 1,
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
