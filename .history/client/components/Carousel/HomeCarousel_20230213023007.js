import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { urlFor } from '../../sanity';

const screenWidth = Dimensions.get('window').width;

const HomeCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const currentIndex = contentOffset / screenWidth;
          setActiveIndex(currentIndex);
        }}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <View key={item._id}style={styles.slide}>
            <Image className="" source={{ uri:  urlFor(item.image).url() }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { opacity: index === activeIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',

  },
  
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  image:{
    width: 450,
    height: 200,
    marginHorizontal:"auto"
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
});

export default HomeCarousel;
