import React from "react";
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
import * as Yup from "yup";
import GreadientText from "../components/GradientText";
import { useSelector, useDispatch } from "react-redux";
import { signUpNewBusiness } from "../../store/actions/user";
import theme from "../theme";
import { StatusBar as Status } from "expo-status-bar";
import GradientText from "../components/GradientText";
import { Picker } from "@react-native-picker/picker";

const SignUpBusiness = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignUpBusiness = ({
    name,
    phone,
    email,
    password,
    ebServiceNo,
    industryType,
    gstin,
  }) => {
    dispatch(
      signUpNewBusiness({
        name,
        phone,
        email,
        password,
        ebServiceNo,
        industryType,
        gstin,
      })
    );
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const BusinessSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.string().matches(phoneRegExp, "Not valid").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    ebServiceNo: Yup.string().required("Required"),
    industryType: Yup.string().required("Required"),
    gstin: Yup.string().required("Required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <View style={styles.header}>
        <GradientText text={"Create An Account"} fontSize={60} />
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            ebServiceNo: "",
            industryType: "",
            gstin: "",
          }}
          validationSchema={BusinessSchema}
          onSubmit={(values) => {
            const {
              name,
              phone,
              email,
              password,
              ebServiceNo,
              industryType,
              gstin,
            } = values;
            console.log(values);
            handleSignUpBusiness({
              name,
              phone,
              email,
              password,
              ebServiceNo,
              industryType,
              gstin,
            });
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
                  Phone Number
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
                    keyboardType="number-pad"
                    onChangeText={formProps.handleChange("phone")}
                    onBlur={formProps.handleBlur("phone")}
                    value={formProps.values.phone}
                  />
                  {formProps.errors.phone && formProps.touched.phone ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.phone}
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
                  EB Service Number
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
                    keyboardType="default"
                    onChangeText={formProps.handleChange("ebServiceNo")}
                    onBlur={formProps.handleBlur("ebServiceNo")}
                    value={formProps.values.ebServiceNo}
                  />
                  {formProps.errors.ebServiceNo &&
                  formProps.touched.ebServiceNo ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.ebServiceNo}
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
                  Industry Type
                </Text>
                <View style={styles.inputField}>
                  <Picker
                    style={[styles.textInput]}
                    onValueChange={formProps.handleChange("industryType")}
                    onBlur={formProps.handleBlur("industryType")}
                  >
                    <Picker.Item
                      label="Select Industry Type"
                      value=""
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Spinning"
                      value="Spinning"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Weaving"
                      value="Weaving"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Knitting"
                      value="Knitting"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Yarn Processing"
                      value="Yarn Processing"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Fabric Processing"
                      value="Fabric Processing"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                    <Picker.Item
                      label="Garment Manufacturing"
                      value="Garment Manufacturing"
                      style={{ fontSize: 20, fontWeight: "bold" }}
                    />
                  </Picker>
                  {formProps.errors.industryType &&
                  formProps.touched.industryType ? (
                    <Text style={{ color: "#8890A6" }}>
                      {formProps.errors.industryType}
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
                  GSTIN
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
                    keyboardType="default"
                    onChangeText={formProps.handleChange("gstin")}
                    onBlur={formProps.handleBlur("gstin")}
                    value={formProps.values.gstin}
                  />
                  {formProps.errors.gstin && formProps.touched.gstin ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.gstin}
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
                  <Feather name="key" color={theme.colors.dark2} size={20} />
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
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.lognin}>
                  <Text style={styles.logtxt}>Already have an Account ? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={[styles.logtxt]}>Log In</Text>
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

export default SignUpBusiness;

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
    flex: 3,
    paddingTop: 30,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
