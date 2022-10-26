import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {/*Category card*/}
      <CategoryCard
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxSEGqEprgSqOKaU4og2vlyEPnZ1BAaIQoA&usqp=CAU"
        title="Fashion"
      />
      <CategoryCard
        imgUrl="http://www.tradekey.com/images/uploadedimages/category/3515/m125465.jpg"
        title="Health & Beauty"
      />
      <CategoryCard
        imgUrl="https://www.tempepawnandgoldllc.com/wp-content/uploads/2013/11/electronics-tempe-pawn-and-gold.jpg"
        title="Electronics"
      />
    </ScrollView>
  );
};

export default Categories;
