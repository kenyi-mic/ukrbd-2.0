import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const ProductCard = ({ id, imgUrl, title, description, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      className="bg-white mr-2 w-44 my-1 h-auto"
    >
      <Image
        className="w-full h-40 rounded-sm"
        source={{ uri: urlFor(imgUrl)?.url() }}
        resizeMode="contain"
      />
      <View className="">
        <Text numberOfLines={1} className="font-semibold text-sm pt-2 mx-2">
          {title}
        </Text>
        <Text numberOfLines={2} className="mx-2 text-sx text-gray-400 mb-2">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    elevation: 5,
  },
});
