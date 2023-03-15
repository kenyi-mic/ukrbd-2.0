import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import {
  ArrowLeftCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithID,
  selectTotalQuantity,
} from "../features/basketSlice";
import ProductCarousel from "../components/Carousel/ProductCarousel";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("screen");
const ProductDetails = () => {
  const navigation = useNavigation();
  const {
    params: { id, name, image, images, description, price, rating },
  } = useRoute();
  const dispatch = useDispatch();
  const quantity = useSelector(selectTotalQuantity);

  const product = useSelector((state) => selectBasketItemsWithID(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price, rating }));
  };

  const removeItemFromBasket = () => dispatch(removeFromBasket({ id }));

  return (
    <View key={id} style={styles.container}>
      <View className="flex flex-row justify-between  pb-4 mb-2 w-full">
        {/*back bottom*/}
        <Pressable
          onPress={() => navigation.goBack()}
          className=" top-8 left-2 my-2"
        >
          <ArrowLeftCircleIcon color="#FF9900" size={40} />
        </Pressable>

        {/*basket*/}
        <Pressable
          onPress={() => navigation.navigate("My Cart")}
          className="top-8 right-2 my-2 "
        >
          <ShoppingCartIcon color="#FF9900" size={40} />
          <Text
            className="absolute right-0  text-xs text-gray-200 font-bold flex justify-items-center  bg-orange-500 w-5 h-5  rounded-full text-center"
            style={{ borderRadius: 9, overflow: "hidden" }}
          >
            {quantity}
          </Text>
        </Pressable>
      </View>
      <ScrollView className="my-3">
        <View style={styles.carousel} className="items-center">
          {/* product carousel */}
          <ProductCarousel id={id} name={name} imgContent={images} />
        </View>
        <View className="ml-3">
          <Text className="my-2 text-xl font-semibold text-gray-600">
            {name}
          </Text>
          <Text
            numberOfLines={5}
            className="text-sm font-semibold text-gray-400"
          >
            {description}
          </Text>
          {/* Rating*/}
          <View className=" flex flex-row items-center py-2">
            {Array(Math.round(rating))
              .fill()
              .map((_, i) => (
                <StarIcon key={i} color="green" opacity={0.7} size={20} />
              ))}
            <Text className="text-green-400 mx-2">{rating} rating</Text>
          </View>
          {/* alterntive image*/}
          <View>
            {/* color*/}
            <View className="flex flex-row"></View>
          </View>
          {/* Sizes*/}

          <Text className="text-lg font-bold text-gray-400">
            <Currency quantity={price} currency="BDT" />
          </Text>

          <Text className="text-lg  font-semibold mb-1">Quantity</Text>
          <View className="flex flex-row items-center space-x-2">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon color="#FF9900" size={30} />
            </TouchableOpacity>
            <Text>{product.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#FF9900" size={30} />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between w-11/12 mb-10">
            <Pressable onPress={addItemToBasket}>
              <Text className="bg-yellow-300 text-lg font-bold text-green-600 p-2 my-3 rounded-sm">
                Add to Cart
              </Text>
            </Pressable>
            <Pressable onPress={() => alert("Sign in!")}>
              <Text className="bg-yellow-500 text-lg font-bold text-gray-600 p-2 my-3 w-28 text-center rounded-sm ">
                Buy
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    flex: 0.5,
  },
});

export default ProductDetails;
