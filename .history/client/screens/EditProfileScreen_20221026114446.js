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
import React, { useCallback } from "react";
import ProductsHeader from "../components/Header/ProductsHeader";

import { formData } from "../components/FormData";
import FormField from "../components/FormField";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [formValues, handleFormValueChange, setFormValues] = formData();
  return (
    <SafeAreaView style={styles.container}>
      <ProductsHeader />
      <ScrollView
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        bounces={false}
      >
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
          onPress={() =>
            navigation.navigate("account", {
              formValues,
            })
          }
          className="bg-yellow-500 m-3 p-2 items-center"
        >
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
