import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const CardTest = ({ id, name, price }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products/images`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(images);

  console.log(items);
  return (
    <View>
      {items?.product_id === id && (
        <View key={id}>
          <Image source={{ uri: items.image }} />
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      )}
    </View>
  );
};

export default CardTest;
