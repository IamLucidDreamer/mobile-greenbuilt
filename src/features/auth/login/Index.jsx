import React, { useState } from "react";
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
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/actions/user";
import * as SecureStore from "expo-secure-store";
import { authenticated, isBusinessUser } from "../../../helpers/auth-helper";
import theme from "../../../Config/theme/Index";
import * as Animatable from "react-native-animatable";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [eye, setEye] = useState(true);

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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/startScreenBackground.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInUpBig"
            duration={800}
            source={require("../../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 100 }}
          />
        </View>
        <View style={styles.footer} animation="fadeInUpBig">
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
                <KeyboardAvoidingView style={styles.inputContainer}>
                  <Text style={styles.text1}>Welcome Back</Text>
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
                    Email
                  </Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor={theme.colors.dark2}
                      style={[styles.textInput]}
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
                    Password
                  </Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor={theme.colors.dark2}
                      style={[styles.textInput]}
                      autoCapitalize="none"
                      secureTextEntry={eye}
                      autoCorrect={false}
                      onChangeText={formProps.handleChange("password")}
                      onBlur={formProps.handleBlur("password")}
                      value={formProps.values.password}
                    />
                    {formProps.errors.password && formProps.touched.password ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.password}
                      </Text>
                    ) : null}
                    <TouchableOpacity
                      onPress={() => setEye(!eye)}
                      style={{ paddingLeft: 5 }}
                    >
                      <Entypo name={eye ? "eye" : "eye-with-line"} size={30} />
                    </TouchableOpacity>
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
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>LogIn</Text>
                  </TouchableOpacity>
                  <View style={styles.signup}>
                    <Text style={styles.signtxt}>Don't have an Account ? </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("userSelect")}
                    >
                      <Text style={[styles.signtxt, { fontWeight: "bold" }]}>
                        Sign Up
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

export default LoginScreen;

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
  text1: {
    color: theme.colors.dark2,
    paddingHorizontal: 5,
    fontSize: 45,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 15,
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
    color: theme.colors.dark2,
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
