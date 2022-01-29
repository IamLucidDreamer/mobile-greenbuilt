import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../components/GradientText";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../theme";

const ForgotPassword = ({ navigation }) => {
  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={require("../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.text1}>
          We'll find it for <Text style={{ fontWeight: "bold" }}>You</Text>
        </Text>
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
              <View style={styles.inputField}>
                <Feather name="user" color={theme.colors.dark2} size={20} />
                <TextInput
                  placeholder="Your Email"
                  placeholderTextColor={theme.colors.dark2}
                  style={[
                    styles.textInput,
                    {
                      color: theme.colors.dark2,
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
              <TouchableOpacity
                onPress={formProps.handleSubmit}
                type="submit"
                style={styles.btn}
              >
                <Text style={styles.btnTxt}>Send OTP</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green2,
  },
  header: {
    flex: 7,
    backgroundColor: theme.colors.cream,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
    shadowColor: "#fff",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  footer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
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
    backgroundColor: theme.colors.cream,
    alignItems: "center",
    height: 70,
    marginTop: 10,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderWidth: 1,
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
  btn: {
    borderRadius: 20,
    paddingVertical: 15,
    width: 300,
    shadowColor: "#fff",
    elevation: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: theme.colors.cream,
  },
  btnTxt: {
    color: theme.colors.dark2,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
