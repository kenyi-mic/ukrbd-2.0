import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems } from "../features/basketSlice";

const Product = ({ id, name, image, images, description, price, rating }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price, rating }));
  };
  const [isPressed, SetIspressed] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
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
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.75,
        elevation: 3,
      }}
      className="bg-white w-44 mx-1 mb-4 bg-re"
    >
      <Image
        className="w-44 h-40 rounded-sm"
        source={{ uri: urlFor(image).url() }}
        resizeMode="contain"
      />
      <Pressable onPress={() => SetIspressed(!isPressed)}>
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
          <TouchableOpacity
            onPress={addItemToBasket}
            className="bg-yellow-300 w-38  mx-2 mb-2 rounded"
          >
            <Text className="text-sm text-gray-600 mx-2 py-2">Add to cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Product;
