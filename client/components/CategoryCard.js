import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ id, imgUrl, title, onPress }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress} className="items-center m-2">
      <Image className="w-16 h-16 rounded-full" source={{ uri: imgUrl }} />
      <Text className="text-xs font-light text-gray-700">{title}</Text>
    </Pressable>
  );
};

export default CategoryCard;
