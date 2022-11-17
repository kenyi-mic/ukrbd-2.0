import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import ProductsHeader from "../components/Header/ProductsHeader";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import ProductRow from "../components/ProductRow";
import { ConsoleLogger } from "@aws-amplify/core";

const ProductsScreen = () => {
  const route = useRoute();
  const [item, setData] = useState();

  useEffect(() => {
    if (!route.params) {
      ConsoleLogger.log("No data in this log...");
    } else {
      if (route?.params?.data) {
        setData(route?.params?.data);
      }
    }
  });
  console.log(item.imgUrl);
  const {
    params: { data },
  } = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ProductsHeader />
      <ScrollView>
        <View className="relative" key={data?.id}>
          <Image
            className="w-full h-56 bg-gray-100 p-4"
            source={{ uri: urlFor(data?.imgUrl).url() }}
          />
        </View>
        <View className="bg-white">
          <View className="px-4 py4">
            <Text className="text-3xl font-bold">{data?.title}</Text>
            <Text className="text-gray-500 mt-2 mb-4">{data?.description}</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                navigation.navigate("collection", {
                  id: data?.id,
                  imgUrl: item?.imgUrl,
                  title: data?.title,
                  description: data?.description,
                  rows: data?.rows,
                })
              }
              className="flex-row items-center space-x-2 p-4 border-y border-yellow-300"
            >
              <QuestionMarkCircleIcon color="gray" size={20} opacity={0.2} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a special order?
              </Text>
              <ChevronRightIcon color="gold" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="px-4 py-6 font-bold text-xl">Products</Text>
          {data.rows?.map((row) => (
            <ProductRow
              key={row._id}
              id={row._id}
              name={row?.name}
              products={row?.products}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
