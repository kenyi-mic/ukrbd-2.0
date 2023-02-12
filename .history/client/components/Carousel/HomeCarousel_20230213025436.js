import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableWithoutFeedback, Text, ScrollView, Dimensions } from 'react-native';
import { urlFor } from '../../sanity';

const {width, height} = Dimensions.get('window');


const HomeCarousel = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedIndex, data.length]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        pagingEnabled
        onScroll={(e) => {
          const contentOffset = e.nativeEvent.contentOffset.x;
          const selectedIndex = Math.round(contentOffset / width);
          setSelectedIndex(selectedIndex);
        }}
        scrollEventThrottle={16}
        snapToAlignment="center"
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback key={item.id}>
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: urlFor(item.image).url() }} />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    height: 200,
  },
  image: {
    width: width - 40,
    height: 200,
  },
  itemContainer: {
    width: width,
    margin:"auto",
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 26,
    position:'absolute',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
   color: '#fff',


  },
});

export default HomeCarousel;
