import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient from "../sanity";
import { useEffect } from "react";

const Collections = ({ id }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products" && _id == "ff8d2c01-1bf9-4dc1-b6ac-5f0edaa084fd"]{
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
        }`
      )
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  console.log(id);
  return (
    <View>
      {products?.map((item) => {
        console.log(item);
      })}
    </View>
  );
};

export default Collections;
