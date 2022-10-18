import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
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
} from "../features/basketSlice";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";

const session = Auth.signIn();

const { width, height } = Dimensions.get("screen");
const ProductDetails = () => {
  const navigation = useNavigation();
  const {
    params: { id, name, image, images, description, price, rating },
  } = useRoute();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);

  const product = useSelector((state) => selectBasketItemsWithID(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price, rating }));
  };

  const removeItemFromBasket = () => dispatch(removeFromBasket({ id }));
  return (
    <ScrollView>
      <View key={id} style={styles.container}>
        <View className="items-center">
          <Image
            style={styles.mainImage}
            source={{ uri: urlFor(image).url() }}
          />
          {/*back bottom*/}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-8 left-2"
          >
            <ArrowLeftCircleIcon color="#FF9900" size={40} />
          </TouchableOpacity>

          {/*basket*/}
          <TouchableOpacity
            onPress={() =>
              !session ? withAuthenticator() : navigation.navigate("My Cart")
            }
            className="absolute top-8 right-2 "
          >
            <ShoppingCartIcon color="#FF9900" size={40} />
            <Text className="absolute right-0 top-0  text-sm text-gray-600 font-bold bg-green-500 w-5 h-5 rounded-full text-center ">
              {items.length}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="ml-3">
          <Text className="my-2 text-xl font-semibold text-gray-600">
            {name}
          </Text>
          <Text className="text-sm font-semibold text-gray-400">
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
          <View className="flex-row items-center space-x-2 pb-3">
            <Pressable onPress={removeItemFromBasket}>
              <MinusCircleIcon color="#FF9900" size={40} />
            </Pressable>
            <Text className="text-xl font-bold">{product.length}</Text>
            <Pressable onPress={addItemToBasket}>
              <PlusCircleIcon color="#FF9900" size={40} />
            </Pressable>
          </View>
          <View className="flex flex-row justify-between w-11/12 mb-10">
            <TouchableOpacity onPress={addItemToBasket}>
              <Text className="bg-yellow-300 text-lg font-bold text-green-600 p-2 my-3 rounded-sm">
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Sign in!")}>
              <Text className="bg-yellow-500 text-lg font-bold text-gray-600 p-2 my-3 w-28 text-center rounded-sm ">
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImage: {
    width: width - 20,
    height: height / 2,
  },
});

export default ProductDetails;
