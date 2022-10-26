import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
  const [categoryData,  setCategoryData] = useState()

  useEffect(()=>{
   sanityClient.fetch(`*[_type=="category"]{
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
    
  }`).then(data=>{
    setCategoryData(data)
  })
  })
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {/*Category card*/}
      <CategoryCard
        imgUrl={}
        title={}
      />
     
    </ScrollView>
  );
};

export default Categories;
