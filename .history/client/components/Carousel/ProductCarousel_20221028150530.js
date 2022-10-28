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
  const [images, setImages] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && _id==$id]{
        ...,
     
     images[]->{
       ...,
       }
        
      }[0]`,
        { id }
      )
      .then((data) => {
        setImages(data?.images);
      });
  }, [id]);

  const [imgActive, setImagActive] = useState(0);

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
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
      >
        {images?.map((item) => (
          <View key={item.id} style={styles.image}>
            <Image
              resizeMode="auto"
              className="w-full h-80"
              source={{ uri: urlFor(item?.image).url() }}
            />
          </View>
        ))}
      </ScrollView>

      {/*Dots*/}
      <View className="absolute bottom-0 right-40 flex-row items-center">
        {images.map((item, index) => (
          <Text
            key={item.length}
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
    width: width - 10,
  },
});

export default ProductCarousel;
