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
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import theme from "../../../../Config/theme/Index";
import * as Animatable from "react-native-animatable";

export const VerifyOtp = (props) => {
  async function verifyOtp(otp) {
    try {
      await props.confirmObj.confirm(otp);
      props.changeFormNumber(3);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  const ForgotSchema = Yup.object().shape({
    otp: Yup.string().required("Required"),
  });

  return (
    <SafeAreaView style={{flex:1}}>
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
          initialValues={{ otp: "" }}
          validationSchema={ForgotSchema}
          onSubmit={(values) => {
            console.log(values);
            verifyOtp(values.otp);
          }}
        >
          {(formProps) => (
            <ScrollView>
              <KeyboardAvoidingView style={styles.inputContainer}>
                <Text style={styles.text1}>Verify It's You</Text>
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
                      },
                    ]}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    onChangeText={formProps.handleChange("otp")}
                    onBlur={formProps.handleBlur("otp")}
                    value={formProps.values.otp}
                  />
                  {formProps.errors.otp && formProps.touched.otp ? (
                    <Text style={{ color: theme.colors.dark2 }}>
                      {formProps.errors.otp}
                    </Text>
                  ) : null}
                </View>
                  <TouchableOpacity
                    onPress={formProps.handleSubmit}
                    type="submit"
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Verify</Text>
                  </TouchableOpacity>
                <Text style={{ fontSize: 16, paddingVertical: 10 }}>
                  OTP sent Successfully to {props.phoneNumber}
                </Text>
                <TouchableOpacity onPress={() => props.changeFormNumber(1)}>
                  <Text style={{ fontSize: 16 }}>Change Phone Number</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </ScrollView>
          )}
        </Formik>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
    color: "#05375a",
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
});
