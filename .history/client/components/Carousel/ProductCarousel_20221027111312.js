import { View, Text, FlatList } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const ProductCarousel = ({ images }) => {
  const _renderItem = ({ item }) => (
    <View>
      <Image source={{ uri: urlFor(item.image).url() }} />
    </View>
  );
  return (
    <View>
      <FlatList
        data={images}
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
