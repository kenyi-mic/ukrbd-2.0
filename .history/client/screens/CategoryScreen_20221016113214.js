import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Header from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/FashionCarousel";

const CategoryScreen = () => {
  const DATA = [
    {
      id: "1",
      title: "Couple Wear",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "2",
      title: "SABOR MORENO",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "3",
      title: "0 MESTRE PUB",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "4",
      title: "GRILL 54 CHEF",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "5",
      title: "RUSTY DRIVE",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "6",
      title: "SABOR MORENO",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "7",
      title: "0 MESTRE PUB",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
    {
      id: "8",
      title: "GRILL 54 CHEF",
      image:
        "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.Container}>
      <Header />
      <Carousel />
      <View>
        <Text className="text-lg font-semibold m-2">Collections</Text>
        <View>
          <FlatList
            data={DATA}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            className="flex-1"
            contentContainerStyle={{ paddingVertical: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const _renderItem = ({ item }) => (
  <View className="flex-1 mx-2 mb-2">
    <Image className="w-full h-32" source={{ uri: item.image }} />
    <Text className="text-center mt-8">{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default CategoryScreen;
