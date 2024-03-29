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
import { useNavigation, useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { selectBasketItems } from "../features/basketSlice";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const {
    params: { items },
  } = useRoute();

  const count = useSelector(selectBasketItems);
  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          My Catalog
        </Text>
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
