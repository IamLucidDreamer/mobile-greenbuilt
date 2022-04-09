import React, { useState } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
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
import { Picker } from "@react-native-picker/picker";
import { countryCode } from "../../utils/phoneNumber";

const SignUpEndUser = ({ navigation }) => {
  const [dialCode, setDialCode] = useState("+91");
  const dispatch = useDispatch();
  const handleSignUpUser = ({ name, email, password }) => {
    dispatch(signUpEndUser({ name, email, password }));
  };

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const UserSignSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().matches(phoneRegExp, "Not valid").required("Required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GradientText text={"Enter Account Details"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{ name: "", email: "", phoneNumber: "" }}
          validationSchema={UserSignSchema}
          onSubmit={(values) => {
            const { name, email, phoneNumber } = values;
            console.log(values);
            navigation.navigate("");
            // handleSignUpUser({ name, email, password });
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
                  Name
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
                  Enter Date of Birth
                </Text>
                <View style={styles.inputField}>
                  <TouchableOpacity
                    style={styles.textInput}
                    onPress={() => setShow(true)}
                  >
                    <Text>Enter your Date of Birth</Text>
                  </TouchableOpacity>
                  {/* {show && <DateTimePicker value={date} />}
                  {formProps.errors.email && formProps.touched.email ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.email}
                    </Text>
                  ) : null} */}
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
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.lognin}>
                  <Text style={styles.logtxt}>Already have an Account ? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
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

export default SignUpEndUser;

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
