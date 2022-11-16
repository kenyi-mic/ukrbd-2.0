import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/HomeCarousel";
import Categories from "../components/Categories";
import CardTest from "../components/CardTest";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
    ...,
    products[]->{
      ...,
      rows[]->{
        ...,
      }
    }
  }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MobileHeader />
      <ScrollView style={styles.ScrollView}>
        <Carousel />
        {/*Categories */}
        <Categories />

        {/* Featured*/}
        {featuredCategory.map((items) => (
          <FeaturedRow
            key={items._id}
            id={items._id}
            title={items.name}
            description={items.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollView: {
    marginVertical: 20,
  },
});

export default HomeScreen;
