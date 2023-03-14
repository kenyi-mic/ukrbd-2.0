import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ProductSlide = ({ item }) => {
  return (
    <View key={item._id} style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: urlFor(item?.image).url() }}
      />
    </View>
  );
};

export default ProductSlide;

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.5,
    alignItems: "center",
  },
  content: {
    alignContent: "flex-start",
  },
  image: {
    width: width * 0.98,
    flex: 1,
    borderRadius: 5,
  },
});
