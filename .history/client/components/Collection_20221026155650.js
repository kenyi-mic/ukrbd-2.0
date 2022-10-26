import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient from "../sanity";
import { useEffect } from "react";

const Collections = ({ id }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products"]{
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
