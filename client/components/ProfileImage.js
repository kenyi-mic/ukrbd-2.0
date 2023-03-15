import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { CameraIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProfileImage = () => {
  const data = useSelector((state) => state.user);
  const profile = data.profileImage;

  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        className="absolute -bottom-12 z-10 ml-4  rounded-full border-4 border-white"
        onPress={() => navigation.navigate("select profile image")}
      >
        <Image
          className="w-24 h-24 rounded-full  "
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
        />
        <Pressable className="absolute bottom-1 shadow right-8 opacity-60">
          <CameraIcon color="white" size={30} />
        </Pressable>
      </TouchableOpacity>
      <View>
        {profile.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("select profile image")}
            key={item.id}
            className="absolute -bottom-12 z-10 ml-4  rounded-full border-4 border-white"
          >
            <Image
              className="w-24 h-24 rounded-full  "
              source={{
                uri: item.uri,
              }}
            />
            <Pressable className="absolute bottom-1 shadow right-8 opacity-60">
              <CameraIcon color="white" size={30} />
            </Pressable>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ProfileImage;
