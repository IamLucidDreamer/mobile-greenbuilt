import React, { useState } from "react";
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
import MaskedView from "@react-native-masked-view/masked-view";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import GreadientText from "../../components/GradientText";
import { useSelector, useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import axios from "../../../helpers/http-helper";
import QRCode from "react-native-qrcode-svg";
import isEmpty from "../../../utils/isEmpty";

const SignUpBusiness = ({ navigation }) => {
  const [qrCode, setQrCode] = useState("");

  const GenerateSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    points: Yup.string().required("Required"),
    photo: Yup.string().required("Required"),
  });

  const handleGenerate = (values) => {
    const products = [{ ...values }];
    console.log({ products });
    SecureStore.getItemAsync("jwt").then((token) => {
      axios
        .post(
          `/qr/generate`,
          {
            products,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          const QR = res.data.data.qrId;
          setQrCode(QR);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GreadientText text={"Generate a QR"} fontSize={50} />
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{ title: "", description: "", points: "", photo: "" }}
          validationSchema={GenerateSchema}
          onSubmit={(values) => {
            values.points = parseInt(values.points);
            console.log({ values });
            handleGenerate(values);
          }}
        >
          {(formProps) => (
            <ScrollView>
              {isEmpty(qrCode) ? (
                <>
                  <Text style={styles.text1}>Product Name</Text>
                  <View style={styles.inputField}>
                    <Feather name="user" color={"#140035"} size={20} />
                    <TextInput
                      placeholder="Name of the Product"
                      placeholderTextColor="#140035"
                      style={[
                        styles.textInput,
                        {
                          color: "#140035",
                        },
                      ]}
                      keyboardType="name-phone-pad"
                      autoCapitalize="words"
                      onChangeText={formProps.handleChange("title")}
                      onBlur={formProps.handleBlur("title")}
                      value={formProps.values.title}
                    />
                    {formProps.errors.title && formProps.touched.title ? (
                      <Text>{formProps.errors.title}</Text>
                    ) : null}
                  </View>
                  <Text style={styles.text1}>Description</Text>
                  <View style={styles.inputField}>
                    <Feather name="phone" color={"#140035"} size={20} />
                    <TextInput
                      placeholder="Description of Product"
                      placeholderTextColor="#140035"
                      style={[
                        styles.textInput,
                        {
                          color: "#140035",
                        },
                      ]}
                      keyboardType="name-phone-pad"
                      onChangeText={formProps.handleChange("description")}
                      onBlur={formProps.handleBlur("description")}
                      value={formProps.values.description}
                    />
                    {formProps.errors.description &&
                    formProps.touched.description ? (
                      <Text>{formProps.errors.description}</Text>
                    ) : null}
                  </View>
                  <Text style={styles.text1}>Points</Text>
                  <View style={styles.inputField}>
                    <Feather name="mail" color={"#140035"} size={20} />
                    <TextInput
                      placeholder="Enter Points"
                      placeholderTextColor="#140035"
                      style={[
                        styles.textInput,
                        {
                          color: "#140035",
                        },
                      ]}
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      onChangeText={formProps.handleChange("points")}
                      onBlur={formProps.handleBlur("points")}
                      value={formProps.values.points}
                    />
                    {formProps.errors.points && formProps.touched.points ? (
                      <Text>{formProps.errors.points}</Text>
                    ) : null}
                  </View>
                  <Text style={styles.text1}>Image</Text>
                  <View style={styles.inputField}>
                    <Feather name="key" color={"#140035"} size={20} />
                    <TextInput
                      placeholder="Image URL"
                      placeholderTextColor="#140035"
                      style={[
                        styles.textInput,
                        {
                          color: "#140035",
                        },
                      ]}
                      secureTextEntry={true}
                      keyboardType="visible-password"
                      onChangeText={formProps.handleChange("photo")}
                      onBlur={formProps.handleBlur("photo")}
                      value={formProps.values.photo}
                    />
                    {formProps.errors.photo && formProps.touched.photo ? (
                      <Text>{formProps.errors.photo}</Text>
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
                    >
                      <Text style={styles.buttonText}>Generate</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </>
              ) : (
                <View style={{ marginBottom: 20, alignItems: "center" }}>
                  <QRCode
                    value={qrCode}
                    size={250}
                    enableLinearGradient={true}
                    linearGradient={["#4bc834", "#1e6100"]}
                  />
                </View>
              )}
            </ScrollView>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUpBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140035",
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 30,
    paddingHorizontal: 20,
    shadowColor: "#29d38a",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
  },
  text1: {
    fontSize: 20,
    marginBottom: 5,
    color: "#140035",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#140035",
    paddingBottom: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  text2: {
    fontSize: 18,
    marginBottom: 20,
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
    width: "95%",
    marginBottom: 20,
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
    flexDirection: "row",
    marginVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  signtxt: {
    fontSize: 15,
  },
});
