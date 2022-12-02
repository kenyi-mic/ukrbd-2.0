import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import sanityClient from "../sanity";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const FeaturedRow = ({ id, title, description }) => {
  const navigation = useNavigation();
  const [subcategory, setSubCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const category = await axios
          .get("https://9934-59-153-18-18.in.ngrok.io/api/categories")
          .then((data) => data.json());
        setSubCategory(category);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  console.log(subcategory);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="black" size={20} />
      </View>
      <Text className="text-xs text-gray500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/*ProductCards*/}
        {subcategory?.map((product) => (
          <ProductCard
            key={product?._id}
            id={product?._id}
            imgUrl={product?.image}
            title={product?.name}
            description={product?.short_description}
            rows={product?.rows}
            onPress={() =>
              navigation.navigate("Products", {
                id: product._id,
                imgUrl: product.image,
                title: product.name,
                description: product.short_description,
                rows: product.rows,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
