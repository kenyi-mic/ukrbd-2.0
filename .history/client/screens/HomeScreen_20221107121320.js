import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/HomeCarousel";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://localhost:3000/api/products`)
      .then((response) => response.json)
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

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
        {featuredCategory.map((categories) => (
          <FeaturedRow
            key={categories._id}
            id={categories._id}
            title={categories.name}
            description={categories.short_description}
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
