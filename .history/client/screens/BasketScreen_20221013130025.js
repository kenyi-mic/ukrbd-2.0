import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { addToBasket, selectBasketItemsWithID } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import BasketItems from "../components/BasketItems";

const CartScreen = () => {
  const items = useSelector((state) => selectBasketItemsWithID(state, id));
  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          My Catalog
        </Text>
        {items.map(item =>(

            <BasketItems id={item.id} name={item.name} image={item.name} images={item.names} description={item.description} price={item.price} rating={rating}/>
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
