import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import ProductsHeader from "../components/Header/ProductsHeader";

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
        <View className="border-2 border-gray-400 mx-3 my-2 ">
          <TextInput
            textContentType="emailAddress"
            placeholder="Enter your name..."
            className="p-3 w-full text-lg"
          />
        </View>
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
