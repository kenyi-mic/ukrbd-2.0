import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const FeaturedRow = ({ id, title, description }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  //FETCHING category
  useEffect(() => {
    const getProduct = async () => {
      const products = await fetch(
        "https://9934-59-153-18-18.in.ngrok.io/api/categories"
      ).then((data) => data.json());
      setProducts(products);
    };
    getProduct();
  }, []);

  console.log(products);

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
        {products?.map((product) => {
          product.subCategory.map((item) => {
            return (
              <ProductCard
                key={product.title}
                id={product.title}
                imgUrl={product?.image}
                title={product?.title}
                description={product?.desc}
                onPress={() =>
                  navigation.navigate("Products", {
                    id: product._id,
                    imgUrl: product.image,
                    title: product.name,
                    description: product.short_description,
                  })
                }
              />
            );
          });
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
