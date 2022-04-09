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
import GradientText from "../../components/GradientText";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { signUpEndUser } from "../../../store/actions/user";
import theme from "../../../Config/theme/Index";
import { Picker } from "@react-native-picker/picker";
import { countryCode } from "../../../utils/phoneNumber";
import auth from "@react-native-firebase/auth";
import { SendOtp } from "./forms/SendOtp";
import { VerifyOtp } from "./forms/VerifyOtp";
import UserDetails from "./forms/UserDetails";

const SignUpEndUser = ({ navigation }) => {
  const [showForm, setShowForm] = useState(1);
  const [confirmObj, setConfirmObj] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const setPhoneNumberFunction = (phoneNumber) => setPhoneNumber(phoneNumber);

  const setConfirmObjFunction = (obj) => setConfirmObj(obj);

  const setForm = (number) => setShowForm(number);

  return (
    <View style={{ flex: 1 }}>
      {showForm === 1 ? (
        <SendOtp
          changeFormNumber={setForm}
          setConfirmObjFunction={setConfirmObjFunction}
          setPhoneNumberFunction={setPhoneNumberFunction}
          navigation={navigation}
        />
      ) : null}
      {showForm === 2 ? (
        <VerifyOtp
          changeFormNumber={setForm}
          phoneNumber={phoneNumber}
          confirmObj={confirmObj}
        />
      ) : null}
      {showForm === 3 ? (
        <UserDetails
          changeFormNumber={setForm}
          navigation={navigation}
          phoneNumber={phoneNumber}
          confirmObj={confirmObj}
        />
      ) : null}
    </View>
  );
};

export default SignUpEndUser;
