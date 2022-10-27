import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../../sanity";

const ProductCarousel = ({ id }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "product" && _id == $id]{
        ...,
       images[]->{
         ...,
       }
        
        
      }[0]`
      )
      .then((data) => {
        setImages(data.images);
      });
  }, [id]);

  console.log(images);
  return <View></View>;
};

export default ProductCarousel;
