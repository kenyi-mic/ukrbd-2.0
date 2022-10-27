import { View, Text, FlatList } from "react-native";
import React from "react";

const ProductCarousel = ({ images }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={_renderItem}
        keyExtractor={(item) => item._id}
        numColumns={1}
        className="flex-1"
        contentContainerStyle={{ paddingVertical: 5 }}
      />
    </View>
  );
};

export default ProductCarousel;
