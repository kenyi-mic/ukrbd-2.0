import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text className="text-lg text-yellow-500 text-center">
        Checkout diffent stores
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default StoreScreen;
