import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ProductsHeader from "../components/Header/ProductsHeader";
import GooglePlacesInput from "../components/GooglePlacesInput";

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsHeader />
      <View>
        <Text className="pl-3 text-xl font-semibold py-3">
          Edit your account information
        </Text>
        <Text className="pl-3 text-lg">Your Name</Text>
        <View className="border-2 border-gray-400 mx-3 my-2 ">
          <TextInput
            placeholder="Enter your name..."
            className="p-3 w-full text-lg"
          />
        </View>

        <Text className="pl-3 text-lg">Your Email Address</Text>
        <View className="border-2 border-gray-400 mx-3 my-2 ">
          <TextInput
            textContentType="email"
            placeholder="Enter Email adress..."
            className="p-3 w-full text-lg"
          />
        </View>
        <Text className="pl-3 text-lg">Choose your location</Text>
        <View className="mx-1 my-2 py-10">
          <GooglePlacesInput />
        </View>

        <Text className="pl-3 text-lg">Your phone number</Text>
        <View className="border-2 border-gray-400 mx-3 my-2 ">
          <TextInput
            textContentType="number"
            placeholder="+19123293233"
            className="p-3 w-full text-lg"
          />
        </View>
        <TouchableOpacity className="bg-yellow-500 mx-3 p-2">
          <Text className="text-lg font-bold text-gray-200">
            Save the Change
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default EditProfileScreen;
