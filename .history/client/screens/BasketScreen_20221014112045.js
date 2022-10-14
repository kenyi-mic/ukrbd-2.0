import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";
import ItemCard from "../components/ItemCard";

const { width, height } = Dimensions.get();

const CartScreen = () => {
  const {
    params: { items },
  } = useRoute();

  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          My Catalog
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
