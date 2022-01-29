import React, { useEffect } from "react";
import {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Powerlogo.png")}
          resizeMode="contain"
          style={{ width: 80, height: 80 }}
        />
        <Text style={styles.text1}>GREENBUILT</Text>
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
                <TouchableOpacity
                  onPress={formProps.handleSubmit}
                  type="submit"
                  style={styles.btn}
                >
                  <Text style={styles.btnTxt}>LogIn</Text>
                </TouchableOpacity>
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green2,
  },
  header: {
    flex: 1,
    backgroundColor: theme.colors.cream,
    alignItems: "center",
    justifyContent: "flex-end",
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
    paddingTop: 30,
  },
  text1: {
    fontSize: 30,
    marginBottom: 20,
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
    shadowColor: "#fff",
    elevation: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    color: theme.colors.dark2,
  },
  forgotbtn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  forgottext: {
    fontSize: 16,
    color: theme.colors.cream2,
  },
  btn: {
    borderRadius: 20,
    paddingVertical: 15,
    width: "100%",
    shadowColor: "#fff",
    elevation: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: theme.colors.cream,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: theme.colors.dark2,
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
    color: theme.colors.cream2,
    fontSize: 15,
  },
});
