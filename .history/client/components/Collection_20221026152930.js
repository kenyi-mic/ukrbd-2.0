import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient from "../sanity";
import { useEffect } from "react";

const Collections = ({ id }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products" && _id=="0ac7436f-7412-46dc-8681-35a8692105fb"]{
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

  console.log(products);
  return (
    <View>
      {products?.map((item) => {
        console.log(item);
      })}
    </View>
  );
};

export default Collections;
