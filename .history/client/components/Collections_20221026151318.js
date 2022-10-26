import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient from "../sanity";

const Collections = ({ id }) => {
  const [products, setProducts] = useState();
  useEffects(() => {
    sanityClient
      .fetch(
        `*[_type == "category" && _id == $id]{
        ...,
        products[]->{
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
        }
      }[0]`
      )
      .then((data) => {
        setProducts(data.products);
      });
  }, [id]);
  return (
    <View>
      <Text>Collections</Text>
    </View>
  );
};

export default Collections;
