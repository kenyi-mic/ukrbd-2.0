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
import { urlFor } from "../sanity";
import { Image } from "react-native";
import FashionCarousel from "../components/Carousel/FashionCarousel";

const CollectionScreen = () => {
  const {
    params: { id, title, products, imgUrl },
  } = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductsHeader />
        <View>
          <FashionCarousel imgUrl={urlFor(imgUrl).url()} />
        </View>
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
