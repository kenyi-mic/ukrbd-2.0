import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import MobileHeader from "../components/Header/MobileHeader";

import ItemCard from "../components/ItemCard";
import { useSelector } from "react-redux";
import { selectBasketItemsWithID } from "../features/basketSlice";

const CartScreen = () => {
  const items = useSelector((state) => selectBasketItemsWithID(state, id));

  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          {items.length === 0
            ? "Your shopping basket is empty."
            : "My Shopping basket"}
        </Text>

        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
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
