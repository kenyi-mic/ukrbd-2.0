import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, CameraIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProfileImage from "../components/ProfileImage";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
import { urlFor } from "../sanity";

const AccountScreen = ({ navigation, route }) => {
  const items = useSelector(selectBasketItems);
  const [imageData, setImageData] = useState([]);
  const [info, setInfo] = useState([]);

  const routeItem = route.params;
  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in this route function!");
    } else {
      if (route.params?.imageData) {
        setImageData(route.params.imageData);
      }
    }
  });
  useEffect(() => {
    if (!route.params) {
      console.log("You didn't enter information");
    } else {
      if (route.params?.formValues) {
        setInfo(route.params?.formValues);
      }
    }
  });

  return (
    <SafeAreaView className="flex-1 z-0">
      <ScrollView>
        {/* Cover image*/}

        <View className="z-0 mb-16 ">
          <View className="w-full h-40 bg-gray-400">
            {imageData === undefined ? (
              <Image
                className="w-full h-40 "
                source={{
                  uri: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
              />
            ) : (
              imageData.map((item) => (
                <View className="w-full h-40" key={item.id}>
                  <Image
                    className="w-full h-40"
                    source={{
                      uri: item.uri,
                    }}
                  />
                </View>
              ))
            )}
          </View>
          {/*back botton*/}
          <Pressable
            className="absolute top-8 left-4 shadow-white shadow"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon color={"white"} size={30} fontWeight={700} />
          </Pressable>
          <Pressable
            className="absolute bottom-2 right-4"
            onPress={() => navigation.navigate("select photo")}
          >
            <CameraIcon color="white" size={30} />
          </Pressable>
          {/* peofile image*/}
          <ProfileImage />
          {/* username*/}
          {info?.name.length < 4 || info?.email.length < 8 ? (
            <View id={id}>
              <Text className="text-2xl absolute -bottom-8 right-20">
                {routeItem?.username}
              </Text>
              {/* email*/}
              <Text className="text-xs text-red-300 font-semibold absolute -bottom-12 right-16">
                {routeItem?.email}
              </Text>
            </View>
          ) : (
            <View>
              <Text className="text-2xl absolute -bottom-8 right-20">
                {info.name}
              </Text>
              {/* email*/}
              <Text className="text-xs text-red-300 font-semibold absolute -bottom-12 right-16">
                {info.email}
              </Text>
            </View>
          )}
        </View>
        <View className="flex flex-row space-x-2 ml-4 items-center">
          <TouchableOpacity className=" w-auto bg-yellow-300 border shadow-sm p-2 rounded-lg">
            <Text className="text-base">Create review</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("edit profile")}
            className="w-auto bg-white border shadow-sm p-2 rounded-lg"
          >
            <Text className="text-base">Edit your profile</Text>
          </TouchableOpacity>
        </View>
        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/*Shoping list*/}
        <View className="ml-4">
          <Text className="text-gray-700  text-xl font-bold">
            Shopping List
          </Text>
          <View className="flex flex-row items-center">
            <View className="flex items-center space-x-1 flex-row my-2">
              {items.map((item) => (
                <TouchableOpacity key={item.id} className="items-center">
                  <Image
                    className="w-10 h-20  rounded"
                    source={{
                      uri: urlFor(item.image).url(),
                    }}
                  />
                  <Text className="text-xs text-center font-semibold italic text-gray-500">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>

        {/*Orders*/}
        <View className="ml-4 ">
          <Text className="text-gray-700  text-xl font-bold">Orders</Text>
          <View className="flex flex-row items-center">
            <TouchableOpacity className="flex flex-col items-center space-x-1 ">
              <Image
                className="w-10 h-20  rounded-xl"
                source={{
                  uri: "https://imgs.search.brave.com/jTyU-REwDGZQ0WOMTU5D4gtIRG4wgL9S56jpd_BWmy4/rs:fit:940:1112:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvaXBob25lXzEy/L2lwaG9uZV8xMl9Q/TkcxOS5wbmc",
                }}
              />
              <Text className="text-xs text-center font-semibold italic text-gray-500">
                Iphone 12 pro
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        <View className="ml-4 ">
          <Text className="text-gray-700  text-xl font-bold">Activities</Text>
          <View className="my-2">
            <Text className="text-gray-500 italic text-xs">
              Your recent activities will appear here.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
