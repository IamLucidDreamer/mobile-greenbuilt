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
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { Form, Formik } from "formik";
import GradientText from "../../../components/GradientText";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signUpEndUser } from "../../../../store/actions/user";
import theme from "../../../../Config/theme/Index";
import DatePicker from "react-native-datepicker";
import Entypo from "react-native-vector-icons/Entypo";
import * as Animatable from "react-native-animatable";

const SignUpEndUser = (props) => {
  const [dialCode, setDialCode] = useState("+91");
  const dispatch = useDispatch();
  const [eye, setEye] = useState(true);

  const handleSignUpUser = ({
    name,
    email,
    password,
    dateOfBirth,
    phoneNumber,
  }) => {
    dispatch(
      signUpEndUser({ name, email, password, dateOfBirth, phoneNumber })
    );
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const UserSignSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    password: Yup.string().required("Required").min(8, "Too Short"),
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
            initialValues={{
              name: "",
              email: "",
              password: "",
              dateOfBirth: "",
            }}
            validationSchema={UserSignSchema}
            onSubmit={(values) => {
              const { name, email, password, dateOfBirth } = values;
              console.log(values);
              const phoneNumber = props.phoneNumber;
              handleSignUpUser({
                name,
                email,
                password,
                dateOfBirth,
                phoneNumber,
              });
            }}
          >
            {(formProps) => (
              <ScrollView>
                <KeyboardAvoidingView style={styles.inputContainer}>
                  <Text style={styles.text1}>Your Details</Text>
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
                    <DatePicker
                      style={styles.textInput}
                      date={date}
                      placeholder="Select Date"
                      format="DD-MM-YYYY"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => {
                        formProps.setFieldValue("dateOfBirth", date);
                        setDate(date);
                      }}
                      customStyles={{
                        dateIcon: {
                          width: 0.1,
                          height: 0.1,
                        },
                        dateInput: {
                          borderWidth: 0,
                        },
                        // ... You can check the source to find the other keys.
                      }}
                    />
                    {formProps.errors.dateOfBirth &&
                    formProps.touched.dateOfBirth ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.dateOfBirth}
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
                      style={[
                        styles.textInput,
                        {
                          color: theme.colors.dark2,
                        },
                      ]}
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
                    onPress={formProps.handleSubmit}
                    type="submit"
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Next</Text>
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

export default SignUpEndUser;

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
