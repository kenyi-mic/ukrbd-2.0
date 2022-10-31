import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/HomeCarousel";
import Categories from "../components/Categories";
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

  const renderItem = (item) => {
    <FeaturedRow
      key={item._id}
      id={item._id}
      title={item.name}
      description={item.short_description}
    />;
  };

  return (
    <View style={styles.container}>
      <MobileHeader />

      <Carousel />
      {/*Categories */}
      <Categories />

      {/* Featured*/}
      <FlatList
        data={featuredCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
