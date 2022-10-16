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
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithID,
} from "../features/basketSlice";
import Currency from "react-currency-formatter";

const { width, height } = Dimensions.get("screen");

const ItemCard = ({ id, name, image, images, description, price, rating }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price, rating }));
  };
  const items = useSelector((state) => selectBasketItemsWithID(state, id));

  const removeItemFromBasket = () => dispatch(removeFromBasket({ id }));

  return (
    <View style={styles.container} id={id} className="items-center py-2  ">
      <View className="flex flex-row space-x-3">
        <Image
          className="w-40 h-48 shadow-sm "
          source={{ uri: urlFor(image).url() }}
        />

        <View className="w-2/4">
          <Text numberOfLines={2} className="text-xl font-bold text-gray-500 ">
            {name}
          </Text>
          <Text numberOfLines={3} className="text-xs font-light ">
            {description}
          </Text>
          <View className="flex flex-row items-center space-x-0">
            {Array(Math.round(rating))
              .fill()
              .map((_, i) => (
                <StarIcon key={i} color="green" opacity={0.7} size={20} />
              ))}
            <Text className="text-green-600">rating</Text>
          </View>
          <View className="flex flex-row items-center justify-around py-2">
            <Text className=" text-lg font-semibold italic text-gray-400">
              QTY:
            </Text>
            <View className="flex flex-row items-center space-x-2">
              <TouchableOpacity onPress={removeItemFromBasket}>
                <MinusCircleIcon color="#FF9900" size={30} />
              </TouchableOpacity>
              {items.length > 0 && (
                <Text className="text-lg font-bold">{items.length}</Text>
              )}
              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon color="#FF9900" size={30} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={removeItemFromBasket}>
              <XMarkIcon color="black" size={30} />
            </TouchableOpacity>
          </View>
          <Text className="text-green-600 text-lg font-light italic">
            <Currency quantity={price * items.length} currency="BDT" />
          </Text>
          {/*Buy and remove button*/}
          <View className="flex flex-row  space-x-6">
            <TouchableOpacity
              onPress={() => alert("Sign in to checkout")}
              activeOpacity={0.7}
              className="bg-amber-500 p-1 my-2 w-20 items-center rounded"
            >
              <Text className="text-lg font-bold text-gray-100">Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={removeItemFromBasket}
              activeOpacity={0.7}
              className="bg-amber-500 p-1 my-2 w-20 items-center rounded"
            >
              <Text className="text-lg font-bold text-gray-100">Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
});

export default ItemCard;
