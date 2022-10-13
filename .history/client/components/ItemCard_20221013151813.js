import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems } from "../features/basketSlice";

const { width, height } = Dimensions.get("screen");

const ItemCard = ({ id, title, image, images, description, price, rating }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, image, description, price, rating }));
  };
  const items = useSelector(selectBasketItems);
  console.log(title);
  return (
    <View style={styles.container} id={id} className="items-center py-2  ">
      {items.id !== id && (
        <View className="flex flex-row space-x-3">
          <Image
            className="w-40 h-48 shadow-sm "
            source={{ uri: urlFor(image).url() }}
          />

          <View className="w-2/4">
            <Text className="text-xl font-bold text-gray-500 ">{title}</Text>
            <Text className="text-xs font-light ">{description}</Text>
            <View>
              <StarIcon color="green" opacity={0.7} size={20} />
              <Text className="text-green-600">{rating}</Text>
            </View>
            <View className="flex flex-row items-center justify-around py-2">
              <Text className=" text-lg font-semibold italic text-gray-400">
                QTY: 1
              </Text>
              <View className="flex flex-row items-center space-x-2">
                <TouchableOpacity onPress={addItemToBasket}>
                  <MinusCircleIcon color="#FF9900" size={30} />
                </TouchableOpacity>
                {items.length > 0 && (
                  <Text className="text-lg font-bold">1</Text>
                )}
                <TouchableOpacity>
                  <PlusCircleIcon color="#FF9900" size={30} />
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

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});

export default ItemCard;
