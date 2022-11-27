import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ProfileBotton from "../components/ProfileBotton";
import { selectBasketItems } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View className="flex flex-row justify-between px-4 py-2 ">
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(226,216,49,0.8)", "transparent"]}
            style={styles.background}
          />
          {/*Logo*/}
          <Pressable
            onPress={() => navigation.navigate("Home")}
            className="flex items-center"
          >
            <Image
              resizeMode="contain"
              className="w-24 h-12"
              source={require("../src/images/logo-ukr-removebg-preview.png")}
            />
          </Pressable>
          <View className="flex flex-row space-x-2 ">
            <BellIcon size={30} color="#1365DF" />
            <MagnifyingGlassIcon color="#1365DF" size={30} />
          </View>
        </View>
        {/*user info*/}
        <View className="flex flex-row justify-between mx-4">
          <View className="flex flex-row space-x-2">
            <Text className="text-xl font-light">Hello,</Text>
            <Pressable onPress={() => navigation.navigate("account")}>
              <Text className="text-xl font-bold">User</Text>
            </Pressable>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("account")}>
            <Image
              className="w-10 h-10 rounded-full bg-white p-2 border"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Bottons */}
        <View className="m-4 items-center">
          <View className="flex flex-row items-center justify-between w-full my-2">
            <ProfileBotton title="Orders" action="orders" />
            <ProfileBotton title="Buy Again" action="orders" />
          </View>
          <View className="flex flex-row items-center justify-between w-full my-2">
            <ProfileBotton title="Account" action="account" />
            <ProfileBotton title="Shopping List" action="My Cart" />
          </View>
        </View>

        {/* Orders */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Your Orders
          </Text>
          <Text className="text-xs font-light italic">
            Hey, your recent orders will appear here.
          </Text>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* Keep Shopping */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Keep Shopping
          </Text>
          <Text className="text-xs font-light italic">
            Your recent visited product appear here
          </Text>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* your shopping list */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Shopping List
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("My Cart")}
            className="rounded-lg border p-2 justify-between"
          >
            <Text className="text-sm ">Your shoping List</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {items.map((item) => (
                <Image
                  key={item.id}
                  className="w-10 h-20 mx-1 rounded- bg-gray-100 p-2"
                  source={{
                    uri: urlFor(item?.image).url(),
                  }}
                />
              ))}
            </ScrollView>
          </TouchableOpacity>
        </View>
        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* your shopping list */}
        <View className="mx-4 my-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Buy Again
          </Text>

          <Text className="text-sm pb-2">
            Recheck items from your previous collections
          </Text>
          <TouchableOpacity className="my-2 bg-yellow-300 p-2 w-40 items-center rounded">
            <Text className="text-lg font-semibold text-gray-700">
              Visit Buy Again
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
export default withAuthenticator(ProfileScreen);
