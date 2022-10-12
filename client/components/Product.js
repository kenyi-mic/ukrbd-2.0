import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const Product = ({ id, name, image, images, description, price, rating }) => {
  const navigation = useNavigation();
  const [isPressed, SetIspressed] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => SetIspressed(!isPressed)}
      className="bg-white w-40 mx-3 mb-4"
    >
      <Image className="w-full h-40" source={{ uri: urlFor(image).url() }} />
      <Pressable
        onPress={() =>
          navigation.navigate("Product Details", {
            id,
            name,
            image,
            images,
            description,
            price,
            rating,
          })
        }
      >
        <Text numberOfLines={1} className="mx-2 text-semibold text-sm">
          {name}
        </Text>
        <Text numberOfLines={2} className="px-2 text-sx text-gray-400">
          {description}
        </Text>
      </Pressable>
      <View className="mx-2 flex-row items-center py-2 justify-between">
        <View className="flex-row items-center">
          <StarIcon color="gold" opacity={0.2} size={20} />
          <Text className="mx-1 text-sm text-gray-400 opacity-50">
            {rating}
          </Text>
        </View>
        <Text className="text-xs text-green-400">
          <Currency quantity={price} currency="BDT" />
        </Text>
      </View>
      {isPressed && (
        <View>
          <TouchableOpacity className="bg-yellow-300 w-24 mx-2 mb-2 rounded">
            <Text className="text-sm text-gray-600 mx-2 py-2">Add to cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Product;
