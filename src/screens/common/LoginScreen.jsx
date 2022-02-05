import React, { useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import GradientText from "../components/GradientText";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/actions/user";
import * as SecureStore from "expo-secure-store";
import { authenticated, isBusinessUser } from "../../helpers/auth-helper";
import Errors from "../components/Errors";
import theme from "../theme";
import Button from "../components/Button";
import { StatusBar as Status } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log({ user });
  const handleSignin = ({ email, password }) => {
    dispatch(
      login({
        email,
        password,
      })
    );
    // authenticated().then((res) => {
    //   if (res) {
    //     if (user?.role === 2) {
    //       navigation.navigate("DashboardBusiness");
    //     } else {
    //       navigation.navigate("Dashboard");
    //     }
    //   }
    //});
  };

  const LogInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <View style={styles.header}>
        <GradientText text={"Welcome Back"} fontSize={60} />
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LogInSchema}
          onSubmit={(values) => {
            const { email, password } = values;
            // same shape as initial values
            console.log(values);
            handleSignin({ email, password });
          }}
        >
          {(formProps) => (
            <ScrollView>
              <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                  <Feather name="mail" color={theme.colors.dark2} size={28} />
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
                <View style={styles.inputField}>
                  <Feather name="key" color={theme.colors.dark2} size={28} />
                  <TextInput
                    placeholder="Your Password"
                    placeholderTextColor={theme.colors.dark2}
                    style={[
                      styles.textInput,
                      {
                        color: theme.colors.dark2,
                      },
                    ]}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    keyboardType="visible-password"
                    onChangeText={formProps.handleChange("password")}
                    onBlur={formProps.handleBlur("password")}
                    value={formProps.values.password}
                  />
                  {formProps.errors.password && formProps.touched.password ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.password}
                    </Text>
                  ) : null}
                </View>
                <TouchableOpacity
                  style={styles.forgotbtn}
                  onPress={() => navigation.navigate("Forgot")}
                >
                  <Text style={styles.forgottext}>Forgot Password</Text>
                </TouchableOpacity>

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
                    <Text style={styles.buttonText}>LogIn</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.signup}>
                  <Text style={styles.signtxt}>Don't have an Account ? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("UserSelect")}
                  >
                    <Text style={[styles.signtxt, { fontWeight: "bold" }]}>
                      Sign Up
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.purple,
  },
  header: {
    flex: 2,
    backgroundColor: theme.colors.purple,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  footer: {
    flex: 3,
    paddingTop: 30,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text1: {
    fontSize: 30,
    marginBottom: 20,
    color: theme.colors.white,
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
    color: theme.colors.purple,
  },
  forgotbtn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  forgottext: {
    fontSize: 16,
    color: theme.colors.purple,
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
  signup: {
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signtxt: {
    color: theme.colors.purple,
    fontSize: 15,
  },
});
