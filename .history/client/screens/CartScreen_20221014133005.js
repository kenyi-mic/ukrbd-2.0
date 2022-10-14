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
import { selectBasketItems, selectTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";

const CartScreen = () => {
  const items = useSelector(selectBasketItems);

  const total = useSelector(selectTotal);

  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          {items.length === 0
            ? "Your shopping basket is empty."
            : "Shopping basket"}
        </Text>

        {items.map((item, i) => (
          <ItemCard
            key={i}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* Total screen*/}
        {items.length !== 0 && (
          <View className="flex-row space-x-2 px-3 py-6">
            <Text className="text-lg font-semibold text-gray-700">
              Subtotal ({items.length} items):
            </Text>
            <Text className="text-lg font-semibold italic text-green-500">
              <Currency quantity={total} currency="BDT" />
            </Text>
          </View>
        )}
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
