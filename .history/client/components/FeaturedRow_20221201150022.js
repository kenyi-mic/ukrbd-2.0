import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import sanityClient from "../sanity";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const FeaturedRow = ({ id, title, description }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //starting from here
  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `http://localhost:3000/api/product`;
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        console.log(response.data.data);
        if (response.status === 200) {
          setProducts(response.data.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled");
        } else {
          setIsLoading(false);
        }
      }
    };
    fetchProduct();
    return () => source.cancel("Data fetching cancelled");
  }, [products]);

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
        {products.map((product) => (
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
