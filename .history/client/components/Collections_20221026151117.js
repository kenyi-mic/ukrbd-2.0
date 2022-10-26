import { View, Text } from "react-native";
import React from "react";
import sanityClient from "../sanity";

const Collections = ({ id }) => {
  useEffects(() => {
    sanityClient.fetch(
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
    );
  });
  return (
    <View>
      <Text>Collections</Text>
    </View>
  );
};

export default Collections;
