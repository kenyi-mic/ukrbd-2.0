import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FashionCarousel = ({ imgUrl }) => {
  return (
    <View>
      <Image className="w-full h-40" source={{ uri: imgUrl }} />
    </View>
  );
};

export default FashionCarousel;
