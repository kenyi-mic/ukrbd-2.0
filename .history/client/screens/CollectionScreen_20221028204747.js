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
    params: { id, title, rows, imgUrl, description },
  } = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductsHeader />
        <View>
          <FashionCarousel imgUrl={urlFor(imgUrl).url()} />
          <View className="bg-slate-500 w-full h-24 absolute bottom-0 opacity-10"></View>
          <Text
            style={styles.text}
            className="text-2xl absolute left-8  bottom-5 font-bold shadow text-gray-500"
          >
            {title}
          </Text>
          <Text className="text-sm text-white drop-shadow-xl font-bold bottom-1 left-8 absolute">
            {description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default CollectionScreen;
