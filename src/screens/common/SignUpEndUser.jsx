import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { Form, Formik } from "formik";
import GradientText from "../components/GradientText";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signUpEndUser } from "../../store/actions/user";
import theme from "../theme";

const SignUpEndUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignUpUser = ({ name, email, password }) => {
    dispatch(signUpEndUser({ name, email, password }));
  };

  const UserSignSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>
          Create An <Text style={{ fontWeight: "bold" }}>Account</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={UserSignSchema}
          onSubmit={(values) => {
            const { name, email, password } = values;
            console.log(values);
            handleSignUpUser({ name, email, password });
          }}
        >
          {(formProps) => (
            <ScrollView>
              <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                  <Feather name="user" color={theme.colors.dark2} size={28} />
                  <TextInput
                    placeholder="Mr. Green"
                    placeholderTextColor={theme.colors.dark2}
                    style={[
                      styles.textInput,
                      {
                        color: theme.colors.dark2,
                      },
                    ]}
                    keyboardType="name-phone-pad"
                    autoCapitalize="words"
                    onChangeText={formProps.handleChange("name")}
                    onBlur={formProps.handleBlur("name")}
                    value={formProps.values.name}
                  />
                  {formProps.errors.name && formProps.touched.name ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.name}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.inputField}>
                  <Feather name="mail" color={theme.colors.dark2} size={28} />
                  <TextInput
                    placeholder="hello@greenbuilt.com"
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
                    placeholder="green@123"
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
                  onPress={formProps.handleSubmit}
                  type="submit"
                  style={styles.btn}
                >
                  <Text style={styles.btnTxt}>LogIn</Text>
                </TouchableOpacity>
                <View style={styles.signup}>
                  <Text style={styles.signtxt}>Already have an Account ? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={[styles.signtxt, { fontWeight: "bold" }]}>
                      Log In
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

export default SignUpEndUser;

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
    fontSize: 45,
    marginBottom: 20,
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
    marginBottom: 10,
  },
  forgottext: {
    fontSize: 16,
    color: "#000",
  },
  btn: {
    marginTop: 25,
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
