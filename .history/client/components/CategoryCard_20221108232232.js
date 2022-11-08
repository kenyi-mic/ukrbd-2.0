import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ id, imgUrl, title, products }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("category", {
          id,
          imgUrl,
          title,
          products,
        })
      }
      className="items-center m-2"
    >
      <Image className="w-20 h-20 rounded-full" source={require(imgUrl)} />
      <Text className="text-sm font-semibold text-gray-700">{title}</Text>
    </Pressable>
  );
};

export default CategoryCard;
