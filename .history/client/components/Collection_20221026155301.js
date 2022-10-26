import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient from "../sanity";
import { useEffect } from "react";

const Collections = ({ id }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products" && _id==$id]{
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
      {products?.map((item) => {
        console.log(item);
      })}
    </View>
  );
};

export default Collections;
