import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import MobileHeader from "../components/Header/MobileHeader";

import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketItemsWithID,
} from "../features/basketSlice";

const CartScreen = () => {
  const items = useSelector(selectBasketItems);

  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          {items.length === 0
            ? "Your shopping basket is empty."
            : "Shopping basket"}
        </Text>

        {ItemCard}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CartScreen;
