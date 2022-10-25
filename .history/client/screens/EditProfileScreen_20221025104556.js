import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import ProductsHeader from "../components/ProductsHeader";

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsHeader />
      <View>
        <Text>Edit your account information</Text>
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
