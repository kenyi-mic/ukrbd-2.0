import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://192.168.5.245:3000/api/products/categories`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error ---> ", err));
  });

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
          id={item.id}
          imgUrl={item.image !== null ? item.image : " "}
          title={item.category}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
