import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";

const CartScreen = () => {
  const {
    params: { items },
  } = useRoute();
  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <Text className="px-4">My Catalog</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CartScreen;
