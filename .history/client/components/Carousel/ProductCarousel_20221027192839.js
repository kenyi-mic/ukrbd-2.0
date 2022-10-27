import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../../sanity";

const ProductCarousel = () => {
  const { width, height } = Dimensions("window");
  const images = [
    {
      id: 1,
      uri: "https://media.istockphoto.com/photos/wedding-couple-posing-picture-id1127804410?k=20&m=1127804410&s=612x612&w=0&h=Z5oIclk96Hx0ucv8OtXgHIdRU2ijJ2QhK2bfh8wQgBU=",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
    {
      id: 2,
      uri: "https://media.istockphoto.com/photos/wedding-couple-posing-picture-id1127804410?k=20&m=1127804410&s=612x612&w=0&h=Z5oIclk96Hx0ucv8OtXgHIdRU2ijJ2QhK2bfh8wQgBU=",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
    {
      id: 3,
      uri: "https://media.istockphoto.com/photos/wedding-couple-posing-picture-id1127804410?k=20&m=1127804410&s=612x612&w=0&h=Z5oIclk96Hx0ucv8OtXgHIdRU2ijJ2QhK2bfh8wQgBU=",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
  ];

  console.log(images);
  return (
    <View>
      {images.map((image) => (
        <View key={image.id}>
          <Image className="w-full h-20" source={{ uri: image.uri }} />
        </View>
      ))}
    </View>
  );
};

export default ProductCarousel;
