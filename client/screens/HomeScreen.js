import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import MobileHeader from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/HomeCarousel";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import Product from "../components/Product";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [products, setProducts] = useState([]);

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
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          ...,
          
        }`
      )
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MobileHeader />
      <ScrollView style={styles.ScrollView}>
        <Carousel data={categoryData} />
        {/*Categories */}
        <Categories />
        {/*Test component*/}

        {/* Featured*/}
        {featuredCategory?.map((items) => (
          <FeaturedRow
            key={items._id}
            id={items._id}
            title={items.name}
            description={items.short_description}
          />
        ))}
        <View className="justify-center items-center">
          <Text className="text-lg my-4 ml-3 font-semibold">Just for you</Text>
          <View className="flex-row flex-wrap justify-center">
            {products?.slice(0, 6).map((product) => (
              <Product
                key={product?._id}
                id={product?._id}
                name={product?.name}
                image={product?.image}
                images={product?.images}
                description={product?.description}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.75,
              elevation: 2,
            }}
            className=" h-58 w-11/12  mt-4 mb-10 bg-white"
          >
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/eid-special-offer-banner-design-template-40461c20c01201fdc0a79ee271047862_screen.jpg?ts=1619676992",
              }}
              alt="Ramadan offer"
            />
          </View>
          <View className="flex-row flex-wrap justify-center">
            {products?.slice(6, 12).map((product) => (
              <Product
                key={product?._id}
                id={product?._id}
                name={product?.name}
                image={product?.image}
                images={product?.images}
                description={product?.description}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </View>
        </View>
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
  image: {
    width: width - 30,
    height: height * 0.25,
  },
});

export default HomeScreen;
