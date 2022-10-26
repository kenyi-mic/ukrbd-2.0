import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ProductsHeader from "../components/Header/ProductsHeader";

import { formData } from "../components/FormData";
import FormField from "../components/FormField";

const EditProfileScreen = () => {
  const [formValues, handleFormValueChange, setFormValues] = formData();
  return (
    <SafeAreaView style={styles.container}>
      <ProductsHeader />
      <ScrollView>
        <Text className="pl-3 text-xl font-semibold py-3">
          Edit your account information
        </Text>
        <FormField
          label="Your Name"
          textContentType="name"
          formKey="name"
          placeholder="Enter your name"
          automplete="name"
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label="Your Email"
          textContentType="email"
          autoComplete="email"
          formKey="email"
          placeholder="Enter your email"
          textInputProps={{
            autoCapitalize: "none",
          }}
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label="Password"
          formKey="password"
          placeholder="Your password"
          textInputProps={{
            autoCapitalize: "none",
          }}
          handleFormValueChange={handleFormValueChange}
        />
        <TouchableOpacity className="bg-yellow-500 m-3 p-2 ">
          <Text className="text-lg font-bold text-gray-200">
            Save the Change
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default EditProfileScreen;
