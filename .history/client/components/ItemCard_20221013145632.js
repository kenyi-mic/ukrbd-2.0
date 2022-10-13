import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems } from "../features/basketSlice";

const ItemCard = ({ id, name, image, images, description, price, rating }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price, rating }));
  };

  const items = useSelector(selectBasketItems);
  return (
    <View id={id} className="px-4 py-6 ">
      {items.id !== id && (
        <View className="flex flex-row space-x-3">
          <Image
            className="w-20 h-40 shadow-sm "
            source={{ uri: urlFor(image).url() }}
          />

          <View className="">
            <Text className="text-xl font-bold text-gray-500 ">{name}</Text>
            <Text className="text-sm font-light ">{description}</Text>
            <View className="flex flex-row items-center justify-around py-2">
              <Text className="p-2 text-lg font-semibold italic text-gray-400">
                QTY: 1
              </Text>
              <View className="flex flex-row items-center space-x-2">
                <TouchableOpacity onPress={addItemToBasket}>
                  <PlusCircleIcon color="#FF9900" size={30} />
                </TouchableOpacity>
                {items.length > 0 && (
                  <Text className="text-lg font-bold">1</Text>
                )}
                <TouchableOpacity>
                  <MinusCircleIcon color="#FF9900" size={30} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <XMarkIcon color="black" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemCard;
