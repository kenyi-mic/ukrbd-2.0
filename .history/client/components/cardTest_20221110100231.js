import { Text, View, Image } from "react-native";
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

  return (
    <View>
      {/* {images?.map((item) => {
        item?.products_id === id && (
          <View className="w-32 h-28 bg-white">
            <Image
              key={item.id}
              className="w-20 h-24"
              source={{ uri: item.image }}
            />
            <Text>{name}</Text>
            <Text>{price}</Text>
          </View>
        );
      })} */}

      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default CardTest;
