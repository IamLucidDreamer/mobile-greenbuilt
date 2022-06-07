import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar as Status } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Picker } from "@react-native-picker/picker";
import theme from "../../../Config/theme/Index";
// import { Country, State, City } from "country-state-city";
import { logout } from "../../../store/actions/user";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userUpdate = Yup.object().shape({});
  const [showDate, setShowDate] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);

//   const countrySelect = Country.getAllCountries();
//   const stateSelect = State.getStatesOfCountry(country);

  const handleUserUpdate = (values) => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Status style="inverted" />
      <LinearGradient colors={["#0a2c3c", "#00404c"]} style={{ flex: 1 }}>
        <View style={styles.container1}>
          <View style={styles.profileBar}>
            <Text style={styles.text1}>
              Hello,{" "}
              <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
            </Text>
            <FontAwesome
              name="user-circle"
              size={45}
              color={theme.colors.white}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <ScrollView style={styles.scroll}>
            {/* <Text
              style={{
                fontSize: 24,
                color: theme.colors.white,
                fontWeight: "bold",
                marginVertical: 30
              }}
            >
              {" "}
              Manage Profile
            </Text> */}
            <Formik
              initialValues={{
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

                handleUserUpdate(values);
              }}
            >
              {(formProps) => (
                <View>
                  <View style={styles.inputContainer}>
                    <View style={styles.inputField}>
                      <Feather
                        name="user"
                        color={theme.colors.white}
                        size={28}
                      />
                      <Text style={[styles.textInput]}>{user.data.name}</Text>
                    </View>
                    <View style={styles.inputField}>
                      <Feather
                        name="mail"
                        color={theme.colors.white}
                        size={28}
                      />
                      <Text style={[styles.textInput]}>{user.data.email}</Text>
                    </View>
                    <View style={styles.inputField}>
                      <Feather
                        name="phone"
                        color={theme.colors.white}
                        size={28}
                      />
                      <Text style={[styles.textInput]}>
                        {user.data.phoneNumber}
                      </Text>
                    </View>
                    {/* <View style={styles.inputField}>
                      <Feather
                        name="users"
                        color={theme.colors.primaryGreen}
                        size={28}
                      />
                      <Picker
                        style={styles.textInput}
                        onValueChange={formProps.handleChange("gender")}
                        onBlur={formProps.handleBlur("gender")}
                        value={user.data.gender}
                      >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Others" value="others" />
                      </Picker>
                      {formProps.errors.gender && formProps.touched.gender ? (
                        <Text style={{ color: theme.colors.primaryGreen }}>
                          {formProps.errors.gender}
                        </Text>
                      ) : null}
                    </View>
                    <View style={styles.inputField}>
                      <Feather
                        name="flag"
                        color={theme.colors.primaryGreen}
                        size={28}
                      />
                      <Picker
                        style={styles.textInput}
                        onValueChange={formProps.handleChange("country")}
                        onBlur={formProps.handleBlur("country")}
                      >
                        <Picker.item label="Select Country" value="" />
                        {countrySelect?.map((data, index) => {
                          return (
                            <Picker.Item
                              key={index}
                              label={data.name}
                              onChange={setCountry(data.isoCode)}
                              value={data.name}
                            />
                          );
                        })}
                      </Picker>
                      {formProps.errors.email && formProps.touched.email ? (
                        <Text style={{ color: theme.colors.primaryGreen }}>
                          {formProps.errors.email}
                        </Text>
                      ) : null}
                    </View>
                    <View style={styles.inputField}>
                      <Feather
                        name="compass"
                        color={theme.colors.primaryGreen}
                        size={28}
                      />
                      <Picker
                        style={styles.textInput}
                        onChangeText={formProps.handleChange("state")}
                        onBlur={formProps.handleBlur("state")}
                      >
                        <Picker.item label="Select State" value="" />
                        {stateSelect.map((data, index) => (
                          <Picker.Item
                            key={index}
                            label={data.name}
                            onChange
                            value={data.name}
                          />
                        ))}
                      </Picker>
                      {formProps.errors.state && formProps.touched.state ? (
                        <Text style={{ color: theme.colors.primaryGreen }}>
                          {formProps.errors.state}
                        </Text>
                      ) : null}
                    </View> */}
                    {/* <TouchableOpacity
                      style={styles.button}
                      onPress={formProps.handleSubmit}
                      type="submit"
                    >
                      <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
              )}
            </Formik>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(logout())}
              >
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#000",
  },
  container1: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  profileBar: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 22,
    color: theme.colors.white,
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
    borderBottomColor: theme.colors.primaryBg2,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 10,
    color: theme.colors.white,
  },
  button: {
    alignSelf: "center",
    width: "95%",
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: "bold",
    marginRight: 20,
    textAlign: "center",
  },
  container2: {
    flex: 7,
  },
  text3: {
    fontSize: 35,
    paddingHorizontal: 20,
    color: theme.colors.primaryGreen,
    paddingVertical: 10,
  },
});
