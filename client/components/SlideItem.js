import { View, Text, StyleSheet, Image  } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const SlideItem = ({ item }) => {
  return (
    <View key={item._id} style={styles.container}>
      <Image style={styles.image} resizeMode='cover' source={{ uri: urlFor(item?.image).url() }} />
      <View style={styles.content}>
      <Text style={styles.title} className="z-10">{item.title}</Text>
      </View>
      
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
    container:{
      width,
      height:height * 0.25,
      alignItems:'center',
    },
    content:{
  alignContent: 'flex-start',
    },
  image: {
    width:width * 0.90,
    flex: 1,
    borderRadius: 10,
    
    
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    color:'white',
    textShadowOffset: { width: 2, height: 1 },
    textShadowColor: '#000',
    elevation: 5,
   
    
    
   
  }
});
