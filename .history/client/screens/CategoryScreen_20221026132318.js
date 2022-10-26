import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header/MobileHeader";
import Carousel from "../components/Carousel/FashionCarousel";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const CategoryScreen = () => {
  const {
    params: { id, title, products, imgUrl },
  } = useRoute();
  return (
    <SafeAreaView style={styles.Container}>
      <Header />
      <Carousel />
      <Text className="text-2xl mx-3 font-bold ">{title}</Text>
      <View>
        <Text className="text-lg font-semibold m-2 text-gray-500 ">
          Collections
        </Text>
        <View>
          <FlatList
            data={products}
            renderItem={_renderItem}
            keyExtractor={(item) => item._id}
            numColumns={2}
            className="flex-1"
            contentContainerStyle={{ paddingVertical: 5 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const _renderItem = ({ item }) => (
  <TouchableOpacity className="flex-1 mx-2 mb-4">
    <Image className="w-full h-40" source={{ uri: urlFor(item.image).url() }} />

    <View className="bg-slate-700 w-full h-8 absolute bottom-0 opacity-75">
      <Text className="absolute bottom-2 left-10 text-center mt-8 text-lg pt-2 text-gray-100 font-semibold ">
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default CategoryScreen;
