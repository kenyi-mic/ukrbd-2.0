import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MobileHeader from "../components/Header/MobileHeader";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { addToBasket, selectBasketItemsWithID } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const items = useSelector((state) => selectBasketItemsWithID(state, id));
  return (
    <SafeAreaView style={styles.Container}>
      <MobileHeader />
      <ScrollView>
        <Text className="px-4 text-2xl font-semibold text-gray-600">
          My Catalog
        </Text>

        <View key={id} className="px-4 py-6 ">
          <View className="flex flex-row space-x-3">
            <Image
              className="w-20 h-40 shadow-sm "
              source={{ uri: urlFor(image).url() }}
            />

            <View className="">
              <Text className="text-xl font-bold text-gray-500 ">{name}</Text>
              <Text className="text-sm font-light ">{description}</Text>
              <View>
                <Text>QTY: 1</Text>
                <View className="flex flex-row items-center space-x-2">
                  <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon color="#FF9900" size={30} />
                  </TouchableOpacity>
                  {count && <Text className="text-lg font-bold">{count}</Text>}
                  <TouchableOpacity>
                    <MinusCircleIcon color="#FF9900" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CartScreen;
