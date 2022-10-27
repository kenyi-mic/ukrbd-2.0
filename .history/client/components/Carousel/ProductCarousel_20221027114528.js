import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity";

const ProductCarousel = ({ id }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    client;
  }, [id]);
  return <View></View>;
};

export default ProductCarousel;
