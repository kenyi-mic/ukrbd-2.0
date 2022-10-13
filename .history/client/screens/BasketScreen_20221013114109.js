import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";

const CartScreen = () => {
  const {
    params: { items },
  } = useRoute();
  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <Text className="px-4 text-2xl font-semibold text-gray-600">
        My Catalog
      </Text>
      {items.map((item) => (
        <View key={item.id}>
          <Image source={{ uri: urlFor(item.image).url() }} />
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CartScreen;
