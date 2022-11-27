import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categoryData, setCategoryData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category"]{
    ...,
    products[]->{
      ...,
      rows[]->{
        ...,
        products[]->{
          ...,
        }
      }
    }
    
  }`
      )
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {/*Category card*/}
      {categoryData?.map((item) => (
        <CategoryCard
          key={item._id}
          imgUrl={urlFor(item.image).url()}
          title={item.title}
          products={item.products}
          onPress={() =>
            navigation.navigate("category", {
              id: item._id,
              imgUrl: item.image,
              title: item.title,
              products: item.products,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
