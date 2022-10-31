import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import client from "../../sanity";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const MobileHeader = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type=="products"]{
    ...,
    rows[]->{
      ...,
      products[]->{
          ...,
        images[]->{
          ...,
        }
      }
    }
  }`
      )
      .then((data) => {
        setCategory(data);
      });
  });
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center justify-center p-4 ">
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon color="black" size={30} />
          <View className="flex w-40 h-20">
            {category?.map((item) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("Products", {
                    id: item._id,
                    imgUrl: item.image,
                    title: item.name,
                    description: item.short_description,
                    rows: item.rows,
                  })
                }
                key={item._id}
                className="bg-white border overflow-hidden "
              >
                <ScrollView>
                  <Text className="p-2 text-xs font-semibold">{item.name}</Text>
                </ScrollView>
              </Pressable>
            ))}
          </View>
        </TouchableOpacity>
        <View className="flex flex-row items-center bg-white p-2 w-11/12 shadow-md rounded-lg mx-2">
          <MagnifyingGlassIcon color="black" size={20} />
          <TextInput
            placeholder="Search on ukrbd.com"
            className="w-full mx-2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default MobileHeader;
