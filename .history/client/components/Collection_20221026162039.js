import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import { useEffect } from "react";
import { FashionCarousel } from "../components/Carousel/FashionCarousel";

const Collections = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products" && _id == $id]{
          ...,
          rows[]->{
            ...,
            products[]->{
              ...,
              images[]->{
                ...,
              }
            }
          }
        }[0]`
      )
      .then((data) => {
        setProducts(data.products);
      });
  }, [id]);

  return (
    <View>
      <FashionCarousel />
      {products?.map((item) => {
        return;
      })}
    </View>
  );
};

export default Collections;
