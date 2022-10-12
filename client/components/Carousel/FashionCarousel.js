import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FashionCarousel = () => {
  return (
    <View>
      <Image
        className="w-full h-28"
        source={require("../../src/images/banner3.jpg")}
      />
    </View>
  );
};

export default FashionCarousel;
