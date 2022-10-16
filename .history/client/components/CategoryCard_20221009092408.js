import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <Pressable className="items-center m-2">
      <Image className="w-20 h-20 rounded-full" source={{ uri: imgUrl }} />
      <Text className="text-sm font-semibold text-gray-700">{title}</Text>
    </Pressable>
  );
};

export default CategoryCard;
