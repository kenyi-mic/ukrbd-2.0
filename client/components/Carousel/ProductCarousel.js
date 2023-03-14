import { View, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import sanityClient from "../../sanity";
import { FlatList } from "react-native";
import ProductSlide from "../ProductSlide";
import ProductPagination from "../ProductPagination";

const ProductCarousel = ({ id }) => {
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

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 0.2,
  }).current;

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => <ProductSlide item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <ProductPagination data={images} scrollX={scrollX} index={index} />
    </View>
  );
};

export default ProductCarousel;
