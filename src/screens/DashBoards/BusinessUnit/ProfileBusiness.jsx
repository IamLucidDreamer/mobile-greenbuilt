import {
  SafeAreaView,
  Platform,
  StatusBar,
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
import { StatusBar as Status } from "expo-status-bar";
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
import { LinearGradient } from "expo-linear-gradient";
import { Country, State, City } from "country-state-city";
import GradientText from "../../components/GradientText";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userUpdate = Yup.object().shape({});
  const [showDate, setShowDate] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);

  const countrySelect = Country.getAllCountries();
  const stateSelect = State.getStatesOfCountry(country);

  const handleUserUpdate = (values) => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Status style="dark" />
      <View style={styles.container1}>
        <View style={styles.profileBar}>
          <Text style={styles.text1}>
            Hello, <Text style={{ fontWeight: "bold" }}>{user.data.name}</Text>
          </Text>
          <FontAwesome
            name="user-circle"
            size={65}
            color={theme.colors.purple}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <ScrollView style={styles.scroll}>
          <GradientText text={"Manage Profile"} fontSize={40} />
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
                      onChangeText={formProps.handleChange("phone")}
                      onBlur={formProps.handleBlur("phone")}
                      value={formProps.values.phoneNumber}
                    />
                    {formProps.errors.phone && formProps.touched.phone ? (
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.phone}
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
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.gender}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.inputField}>
                    <Feather name="flag" color={theme.colors.dark2} size={28} />
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
                      <Text style={{ color: theme.colors.dark2 }}>
                        {formProps.errors.state}
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
                    >
                      <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            )}
          </Formik>
          <View>
            <LinearGradient
              colors={["#1e6100", "#4bc834"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0.33 }}
              style={styles.button}
            >
              <TouchableOpacity
                onPress={() => dispatch(logout())}
                style={styles.btn}
              >
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container1: {
    flex: 1,
    backgroundColor: theme.colors.white,
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
    fontSize: 24,
    marginTop: 10,
    color: theme.colors.purple,
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
  button: {
    alignSelf: "center",
    marginVertical: 10,
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
