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
import { selectBasketItems } from "../features/basketSlice";

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
          <View className="px-3 py-4">
            <Text className="text-xl font-semibold text-gray-700">
              Subtotal {`(${items.length})`} Items
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
