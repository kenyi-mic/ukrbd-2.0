import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../../sanity";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const ProductCarousel = ({ id, name }) => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && _id==$id]{
        ...,
     
     images[]->{
       ...,
       }
        
      }[0]`
      )
      .then((data) => {
        setPhotos(data?.images);
      });
  });
  const [imgActive, setImagActive] = useState(0);
  const images = [
    {
      id: 1,
      uri: "https://media.istockphoto.com/photos/wedding-couple-posing-picture-id1127804410?k=20&m=1127804410&s=612x612&w=0&h=Z5oIclk96Hx0ucv8OtXgHIdRU2ijJ2QhK2bfh8wQgBU=",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmdsYWRlc2hpJTIwd29tZW4lMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      name: "Wedding coillections, new collections",
      description:
        "Discount upto 50% on wedding collections this winter, its time to wed alegant & sweet",
    },
  ];
  console.log(id);
  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide != imgActive) {
        setImagActive(slide);
      }
    }
  };

  return (
    <View style={styles.image}>
      <ScrollView
        resizeMode="stretch"
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
      >
        {images?.map((image) => (
          <View key={image.id} style={styles.image}>
            <Image className="w-full h-80" source={{ uri: image?.uri }} />
          </View>
        ))}
      </ScrollView>

      {/*Dots*/}
      <View className="absolute bottom-0 right-40 flex-row items-center">
        {images.map((item, index) => (
          <Text
            key={item}
            className={`${
              imgActive == index ? "m-3 text-black " : "m-3 text-[#ccc]"
            }`}
          >
            &#x25cf;
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
  },
});

export default ProductCarousel;
