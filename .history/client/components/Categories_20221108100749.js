import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categoryData, setCategoryData] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products/categories`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error ---> ", err));
  });

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
      {data?.map((item) => (
        <CategoryCard
          key={item.id}
          imgUrl={item.image}
          title={item.category}
          products={item.products}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
