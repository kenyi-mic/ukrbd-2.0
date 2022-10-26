import { View, Text } from "react-native";
import React, { useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import { useEffect } from "react";
import { FashionCarousel } from "../components/Carousel/FashionCarousel";

const Collections = (id) => {
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
      {products?.map((item) => {
        return <FashionCarousel imgUrl={urlFor(item.image).url()} />;
      })}
    </View>
  );
};

export default Collections;
