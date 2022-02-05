import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { logout } from "../../../store/actions/user";
import DateTimePicker from "@react-native-community/datetimepicker";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userUpdate = Yup.object().shape({});
  const [showDate, setShowDate] = useState(false);

  const handleUserUpdate = (values) => {
    console.log(values);
  };

  const onChangeDOB = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileBar}>
          <Text style={styles.text1}>
            Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
          </Text>
          <FontAwesome
            name="user-circle"
            size={65}
            color={theme.colors.cream2}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text3}>Manage Profile</Text>
        <ScrollView style={styles.scroll}>
          <Formik
            initialValues={{
              phone: "",
              dateOfBirth: "",
              gender: "",
              country: "",
              state: "",
              city: "",
              address: "",
            }}
            validationSchema={userUpdate}
            onSubmit={(values) => {
              const { email, password } = values;
              // same shape as initial values
              console.log(values);
              handleUserUpdate(values);
            }}
          >
            {(formProps) => (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputField}>
                    <Feather name="user" color={theme.colors.dark2} size={28} />
                    <Text
                      style={[
                        styles.textInput,
                        {
                          color: theme.colors.dark2,
                        },
                      ]}
                    >
                      {user.data.name}
                    </Text>
                  </View>
                  <View style={styles.inputField}>
                    <Feather name="mail" color={theme.colors.dark2} size={28} />
                    <Text
                      style={[
                        styles.textInput,
                        {
                          color: theme.colors.dark2,
                        },
                      ]}
                    >
                      {user.data.email}
                    </Text>
                  </View>
                  <View style={styles.inputField}>
                    <Feather
                      name="phone"
                      color={theme.colors.dark2}
                      size={28}
                    />
                    <TextInput
                      placeholder="Phone Number"
                      placeholderTextColor={theme.colors.dark2}
                      style={[
                        styles.textInput,
                        {
                          color: theme.colors.dark2,
                        },
                      ]}
                      autoCapitalize="none"
                      keyboardType="phone-pad"
                      onChangeText={formProps.handleChange("phoneNumber")}
                      onBlur={formProps.handleBlur("phoneNumber")}
                      value={formProps.values.phoneNumber}
                    />
                    {formProps.errors.phoneNumber &&
                    formProps.touched.phoneNumber ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.phoneNumber}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <Feather
                      name="calendar"
                      color={theme.colors.dark2}
                      size={28}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setShowDate(true);
                      }}
                      style={styles.textInput}
                      on
                    >
                      <Text>Enter Date of Birth {}</Text>
                      {showDate ? (
                        <DateTimePicker
                          testID="dateTimePicker"
                          mode="date"
                          value={new Date()}
                          display="default"
                          onChange={() => {
                            formProps.handleChange("dateOfBirth");
                            (event, selectedDate) => {
                              setShow(false);
                              setDate(selectedDate);
                            };
                          }}
                        />
                      ) : null}
                    </TouchableOpacity>
                    {formProps.errors.dateOfBirth &&
                    formProps.touched.dateOfBirth ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.dateOfBirth}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <Feather
                      name="users"
                      color={theme.colors.dark2}
                      size={28}
                    />
                    <Picker
                      style={styles.textInput}
                      onChangeText={formProps.handleChange("email")}
                      onBlur={formProps.handleBlur("email")}
                      value={user.data.email}
                    >
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      <Picker.Item label="Others" value="others" />
                    </Picker>
                    {formProps.errors.email && formProps.touched.email ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <Feather name="flag" color={theme.colors.dark2} size={28} />
                    <Picker
                      style={styles.textInput}
                      onChangeText={formProps.handleChange("email")}
                      onBlur={formProps.handleBlur("email")}
                      value={user.data.email}
                    >
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    {formProps.errors.email && formProps.touched.email ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <Feather
                      name="compass"
                      color={theme.colors.dark2}
                      size={28}
                    />
                    <Picker
                      style={styles.textInput}
                      onChangeText={formProps.handleChange("email")}
                      onBlur={formProps.handleBlur("email")}
                      value={user.data.email}
                    >
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    {formProps.errors.email && formProps.touched.email ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <TouchableOpacity
                    onPress={formProps.handleSubmit}
                    type="submit"
                    style={styles.btn}
                  >
                    <Text style={styles.btnTxt}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View>
            <View>
              <Text style={[styles.text1, { color: theme.colors.dark2 }]}>
                Theme
              </Text>
              <Switch />
            </View>
            <TouchableOpacity
              onPress={() => dispatch(logout())}
              type="submit"
              style={styles.btn}
            >
              <Text style={styles.btnTxt}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  container1: {
    flex: 1,
    backgroundColor: theme.colors.green2,
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
    shadowColor: "#fff",
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  profileBar: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 24,
    marginTop: 10,
    color: theme.colors.cream2,
  },
  scroll: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginTop: 10,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderBottomWidth: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    color: theme.colors.dark2,
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
    backgroundColor: theme.colors.dark2,
    marginBottom: 20,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: theme.colors.cream,
  },
  container2: {
    flex: 7,
  },
  text3: {
    fontSize: 35,
    paddingHorizontal: 20,
    color: theme.colors.dark2,
    paddingVertical: 10,
  },
});
