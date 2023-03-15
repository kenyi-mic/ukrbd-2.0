import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import ProductsHeader from "../components/Header/ProductsHeader";

import { formData } from "../components/FormData";
import FormField from "../components/FormField";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setLocation,
  setName,
  setPhone,
} from "../features/userSlice";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [formValues, handleFormValueChange, setFormValues] = formData();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formValues.name;
    const email = formValues.email;
    const phone = formValues.phone;
    const location = formValues.location;

    dispatch(setName(name));
    dispatch(setEmail(email));
    dispatch(setPhone(phone));
    dispatch(setLocation(location));
    navigation.navigate("account");
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always"
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ProductsHeader className="sticky top-0" />
      <SafeAreaView style={styles.container}>
        <Text className="pl-3 text-xl font-semibold py-3">
          Edit your account information
        </Text>
        <FormField
          label="Your name"
          formKey="name"
          placeholder="Enter your name"
          textInputProps={{
            automplete: "name",
            textContentType: "name",
          }}
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label="Your email"
          formKey="email"
          placeholder="Enter your email"
          textInputProps={{
            autoComplete: "email",
            textContentType: "emailAddress",
            autoCapitalize: "none",
          }}
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label="Your Phone Number"
          formKey="number"
          placeholder="Enter your number... "
          textInputProps={{
            autoComplete: "tel",
            textContentType: "phoneNumber",
            autoCapitalize: "none",
          }}
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label="Enter your location"
          formKey="location"
          placeholder="Location..."
          textInputProps={{
            autoComplete: "street-address",
            textContentType: "streetAddressLine1",
            autoCapitalize: "none",
          }}
          handleFormValueChange={handleFormValueChange}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-yellow-500 m-3 p-2 items-center"
        >
          <Text className="text-lg font-bold text-gray-200">
            Save the Change
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default EditProfileScreen;
