import { Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";

const CardTest = ({ id, name, price, image, description }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className="mx-4">
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{id}</Text>
      <Text>{description}</Text>
      <Image
        className="mx-2 mt-2"
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default CardTest;
