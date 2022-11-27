import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";

const FeaturedRow = ({ id, title, products, description, onPress }) => {
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
        {products?.map((product) => (
          <ProductCard
            key={product?._id}
            id={product?._id}
            imgUrl={product?.image}
            title={product?.name}
            description={product?.short_description}
            rows={product?.rows}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
