import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const cardTest = ({ id, name, price }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products/images`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = images?.map((item) => item);

  console.log(items);
  return (
    <View>
   {items?.product_id === id &&(
     <View key={id}>
       <Image source={{ uri:  }} />
       <Text>{name}</Text>
       <Text>{price}</Text>
     </View>
   )
     </View>

    }
  );
};

export default cardTest;
