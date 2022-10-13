import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";
import { urlFor } from "../sanity";

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
          <View key={item.id} className="px-4 py-6">
            <View className="flex flex-row space-x-4">
              <Image
                className="w-20 h-40"
                source={{ uri: urlFor(item.image).url() }}
              />

              <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>QTY: {item.length}</Text>
              </View>
            </View>
          </View>
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
