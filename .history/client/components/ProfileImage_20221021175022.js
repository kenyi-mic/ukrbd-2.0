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
    <>
      <TouchableOpacity className="absolute -bottom-12 z-10 ml-4  rounded-full border-4 border-white">
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
        {profileData.map((item) => (
          <TouchableOpacity
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
