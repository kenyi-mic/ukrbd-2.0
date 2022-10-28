import { View, Text, ScrollView } from "react-native";
import React from "react";
import Product from "../components/Product";

const ProductRow = ({ id, name, products }) => {
  return (
    <View key={id} className="">
      <Text className="px-4 py-2 font-bold text-xl">{name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row ">
          {products?.map((product) => (
            <Product
              key={product?._id}
              id={product?._id}
              name={product?.name}
              image={product?.image}
              images={product?.images}
              description={product?.description}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductRow;
