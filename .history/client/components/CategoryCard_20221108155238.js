import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ id, imgUrl, title }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  products?.map((item) => {
    item.categories_id === id
      ? console.log(item)
      : console.log("id ", id + "Doesn't match category");
  });

  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("category", {
          id,
          imgUrl,
          title,
        })
      }
      className="items-center m-2"
    >
      <Image className="w-20 h-20 rounded-full" source={{ uri: imgUrl }} />
      <Text className="text-sm font-semibold text-gray-700">{title}</Text>
    </Pressable>
  );
};

export default CategoryCard;
