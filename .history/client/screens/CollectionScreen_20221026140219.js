import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import ProductsHeader from "../components/Header/ProductsHeader";
import FashionCarousel from "../components/Carousel/FashionCarousel";

const CollectionScreen = () => {
  const {
    params: { products },
  } = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProductsHeader />
        {products?.map((item) => {
          return (
            <View>
              <FashionCarousel imgUrl={urlFor(item.image).url()} />
            </View>
          );
        })}
      </View>
      <Text>Here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CollectionScreen;
