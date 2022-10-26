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
    params: { id, title, products, imgUrl, short_description },
  } = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductsHeader />
        <View>
          <FashionCarousel imgUrl={urlFor(imgUrl).url()} />
          <View className="bg-slate-500 w-full h-20 absolute bottom-5 opacity-5">
            <Text className="text-2xl absolute left-8  bottom-5 font-bold shadow text-gray-500">
              {title}
            </Text>
          </View>
          <Text>{short_description}</Text>
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
