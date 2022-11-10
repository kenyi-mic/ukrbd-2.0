import { Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";

const ProductImage = ({ id, image }) => {
  return (
    <View key={id}>
      <Image className="w-20 h-20 bg-gray-300" source={{ uri: image }} />
    </View>
  );
};

export default ProductImage;
