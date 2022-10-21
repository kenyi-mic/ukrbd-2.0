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

const AccountScreen = () => {
  const [imageData, setImageData] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in this route function!");
    } else {
      if (route.params.imageData) {
        setImageData(route.params.imageData);
      }
    }
  });
  const navigation = useNavigation();
  console.log(imageData);

  return (
    <SafeAreaView className="flex-1 z-0">
      <ScrollView>
        {/* Cover image*/}

        <View className="z-0 mb-16">
          {imageData.map((item) =>
            item ? (
              <View className="w-full h-40 bg-gray-600"></View>
            ) : (
              <Image
                key={item.id}
                className="w-full h-40"
                source={{
                  uri: item.uri,
                }}
              />
            )
          )}

          {/*back botton*/}
          <Pressable
            className="absolute top-8 left-4 shadow-white shadow"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon color={"black"} size={30} />
          </Pressable>
          <Pressable
            className="absolute bottom-2 right-4"
            onPress={() => navigation.navigate("select photo")}
          >
            <CameraIcon color="white" size={30} />
          </Pressable>
          {/* peofile image*/}
          <TouchableOpacity className="absolute -bottom-12 z-10 ml-4 border-4 rounded-full border-white ">
            <Image
              className="w-24 h-24 rounded-full  "
              source={{
                uri: "https://lh3.googleusercontent.com/-wwP3e5T8JyldY2EvUsq4NjMfBP5_U4pjFjvR-V5l5YB54Ah6usAo4Oqz_kvjEvZt5brdh7QkEyIUR65Eg8EwmYSrbRZjG0R9fVyXgNuGmiEEKfEACc3TJj_6f2HzyxHYmnm-FG6NR-Ccm9wxJYBbC93voaHfBDBkQCesettdA9MSykH_ozUtFNBitO96G0-HfBedCKle8JzZM_ObGBK72IO4Zvc6cK_fuTzj4ta9SNGzqos5OPrbIZ5H80L7DIXhWbK16N7TimBjtNCuscNwB6ILbgCR6tlBUNPQLNLFp_lwY0wmoRjV_qsvcsQ4dtYmE1nhhSoWQVPXxdWdfyLtfeesZtsfwt_IPAfziN60_JOo2_AfPhBrgm-8DGA3V473wfRhC5B-ArtgBFD10Sq8KEzHQRCrkAzoVZxL7xXzXEcve1Zx-LhiejAfMfxJReBwX8s4lWfjb7Qvwc_KzZQppZJKn68t3uj3WyFRLLR9OlPynAwnlQWRplfn9M___9zQkwDAFURrobPvtlgy3Qvv8ldwuiYTVd1ylaqLYFRs_eEbLCMwkmMaNMGkN3igFUXQCXkb5_yU2mnYOjEjQhBiZ8iGAOuwTvii8xyEyYtoKjDQIcdlr4F7YbCYtNc3xLcB40VYE8VjDjJF0CT3CUseUZtfP24AK2aAuX1VgFV1ZplDj809KGWEDgC4xLur9W9V3sLO-MuDJRUbgpg2F8z1sTSIPm_vAzx90mBSl19vFlveTeVCE6XPdHggTRoTuFE-Ys-7jhFd50X_I2lKQmXmzNO2wALmmtEfxxuoVv0SRzg3MCUL9Q8dY1CGs3-yeYGHy9yKCHNFUC3yNlMhJrzU73lDejRV_kX3_v1UCHaEXbHy0BLuAI5ixx-NxHbHlIK4N-W0sQzJS7JUiE_zfBNOzSIYFOrjB7eVr2mac8=w610-h611-no?authuser=0",
              }}
            />
            <Pressable className="absolute bottom-1 shadow right-8 opacity-60">
              <CameraIcon color="white" size={30} />
            </Pressable>
          </TouchableOpacity>
          {/* username*/}
          <Text className="text-2xl absolute -bottom-8 right-20">
            Michael Henry
          </Text>
        </View>
        <View className="flex flex-row space-x-2 ml-4 items-center">
          <TouchableOpacity className=" w-auto bg-[#DFFF00] border shadow-sm p-2 rounded-lg">
            <Text className="text-base">Create review</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-auto bg-white border shadow-sm p-2 rounded-lg">
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
