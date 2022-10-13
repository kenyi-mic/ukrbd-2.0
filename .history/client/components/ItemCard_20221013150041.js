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
    <View id={id} className="px-2 py-6  w-11/12">
      {items.id !== id && (
        <View className="flex flex-row space-x-3">
          <Image
            className="w-40 h-48 shadow-sm "
            source={{ uri: urlFor(image).url() }}
          />

          <View className="w-5/6">
            <Text className="text-xl font-bold text-gray-500 ">{name}</Text>
            <Text className="text-sm font-light ">{description}</Text>
            <View className="flex flex-row items-center justify-around py-2">
              <Text className=" text-lg font-semibold italic text-gray-400">
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
