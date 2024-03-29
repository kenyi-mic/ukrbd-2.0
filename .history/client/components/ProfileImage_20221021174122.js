import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { CameraIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProfileImage = () => {
  const [profileData, setProfileData] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in this route function!");
    } else {
      if (route.params.profileData) {
        setProfileData(route.params.profileData);
      }
    }
  });
  const navigation = useNavigation();

  return (
    <View className="w-24 h-24 rounded-full bg-slate-500 absolute -bottom-12 ml-4 border-white">
      {profileData.map((item) => (
        <TouchableOpacity
          key={item.id}
          className="absolute -bottom-12 z-10 ml-4 border-4 rounded-full  "
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
  );
};

export default ProfileImage;
