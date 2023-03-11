import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import SlideItem from "../SlideItem";
import Pagination from "../Pagination";
import { useRef } from "react";
import Animated from "react-native-reanimated";

const HomeCarousel = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event=> {
    Animated.event([
      {
        nativeEvent:{
          contentOffset:{
            x:scrollX,
          }
        }
      }
    ], {
      useNativeDriver:false, 
    },
    )(event)
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={data} scrollX={scrollX}/>
    </View>
  );
};

export default HomeCarousel;
