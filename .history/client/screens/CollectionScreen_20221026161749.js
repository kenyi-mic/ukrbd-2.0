import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import ProductsHeader from "../components/Header/ProductsHeader";

import Collection from "../components/Collection";

const CollectionScreen = () => {
  const {
    params: { products },
  } = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductsHeader />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CollectionScreen;
