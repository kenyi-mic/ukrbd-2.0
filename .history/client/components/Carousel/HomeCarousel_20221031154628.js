import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeCarousel = () => {
  return (
    <View>
      <Image
        className="w-full h-28 "
        source={require("../../src/images/1633419570.jpg")}
      />
    </View>
  );
};

export default HomeCarousel;
