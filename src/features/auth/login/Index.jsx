import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/actions/user";
import theme from "../../../Config/theme/Index";
import * as Animatable from "react-native-animatable";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [eye, setEye] = useState(true);
  const [loading, setLoading] = useState(false);

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
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
            animation="fadeInUpBig"
            duration={800}
            source={require("../../../assets/logoGreenbuilt.png")}
            resizeMode="contain"
            style={{ width: "95%", height: 100 }}
          />
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
              setLoading(true);
              setTimeout(() => setLoading(false), 6000);
            }}
          >
            {(formProps) => (
              <ScrollView>
                <KeyboardAvoidingView style={styles.inputContainer}>
                  <Text style={styles.text1}>Welcome Back</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={theme.colors.dark2}
                      style={[styles.textInput]}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      onChangeText={formProps.handleChange("email")}
                      onBlur={formProps.handleBlur("email")}
                      value={formProps.values.email}
                    />
                    {formProps.errors.email && formProps.touched.email ? (
                      <Text style={{ color: theme.colors.primaryBg }}>
                        {formProps.errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder="Password"
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
                      <Text style={{ color: theme.colors.primaryBg }}>
                        {formProps.errors.password}
                      </Text>
                    ) : null}
                    <TouchableOpacity
                      onPress={() => setEye(!eye)}
                      style={{ paddingLeft: 5 }}
                    >
                      <Entypo
                        name={eye ? "eye" : "eye-with-line"}
                        size={23}
                        style={{ color: theme.colors.primaryBg }}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.forgotbtn}
                    onPress={() => navigation.navigate("Forgot")}
                  >
                    <Text style={styles.forgottext}>Forgot Password</Text>
                  </TouchableOpacity>
                  {loading ? (
                    <ActivityIndicator
                      size={"large"}
                      animating={true}
                      color={theme.colors.primaryGreen}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={formProps.handleSubmit}
                      type="submit"
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                  )}
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
      </LinearGradient>
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
    backgroundColor: theme.colors.white,
    justifyContent: "space-evenly",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: 30,
    padding: 20,
  },
  text1: {
    color: theme.colors.primaryBg,
    paddingHorizontal: 5,
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
  },
  inputField: {
    flexDirection: "row",
    borderBottomWidth: 2,
    alignItems: "center",
    height: 50,
    marginTop: 10,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    color: theme.colors.primaryBg,
  },
  forgotbtn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  forgottext: {
    fontSize: 16,
    color: theme.colors.primaryBg,
  },
  button: {
    alignSelf: "center",
    width: "100%",
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: "bold",
    marginRight: 20,
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
    color: theme.colors.primaryBg,
    fontSize: 15,
  },
});
