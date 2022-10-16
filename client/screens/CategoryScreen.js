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
        "https://cholokini.net/wp-content/uploads/2021/05/Couple_Dress-Black_Panjabi___Kurti_.jpg",
    },
    {
      id: "2",
      title: "Casual Wear",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUxsd0I0zQn98SLU1W-24mcF_HLMpQiEV1A&usqp=CAU",
    },
    {
      id: "3",
      title: "Foot Wear",
      image:
        "https://media.istockphoto.com/photos/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-picture-id1279108197?b=1&k=20&m=1279108197&s=170667a&w=0&h=xsRzjVqdESDfMsSA8p7UQGYl07gaQA-Jg-kx5-B6fKE=",
    },
    {
      id: "4",
      title: "Winter Wear",
      image:
        "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/Uniqlo-winter-wear-in-singapore-900x643.jpg",
    },
    {
      id: "5",
      title: "Summer Dress",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx57de3_hyXrNwbQNcIoDBFPdyr4xhCVJrJkDwo2x1gdsOXL5JZlpIfcbJh-HTmkxPhw&usqp=CAU",
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
            contentContainerStyle={{ paddingVertical: 5 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const _renderItem = ({ item }) => (
  <View className="flex-1 mx-2 mb-4">
    <Image className="w-full h-40" source={{ uri: item.image }} />
    <View className="bg-slate-700 w-full h-8 absolute bottom-0 opacity-75">
      <Text className="absolute bottom-2 left-10 text-center mt-8 text-lg pt-2 text-gray-100 font-semibold ">
        {item.title}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default CategoryScreen;
