import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ id, imgUrl, title, description, rows }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Products", {
          data: { id, imgUrl, title, description, rows },
        })
      }
      className="bg-white mr-3 shadow w-44 h-auto"
    >
      <Image className="w-full h-40 " source={{ uri: urlFor(imgUrl)?.url() }} />
      <View>
        <Text numberOfLines={1} className="font-semibold text-base pt-2 mx-2">
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
