import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import React from "react";

const UserInfo = ({ id, username, email, onPress }) => {
  return (
    <View>
      <View className="flex flex-row justify-between mx-4">
        <View className="flex flex-row space-x-2">
          <Text className="text-xl font-light">Hello,</Text>
          <Pressable onPress={onPress}>
            <Text className="text-xl font-bold">{username}</Text>
          </Pressable>
        </View>

        <TouchableOpacity onPress={onPress}>
          <Image
            className="w-10 h-10 rounded-full bg-white p-2 border"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text className="text-sm mx-4 text-blue-600 ">{email}</Text>
    </View>
  );
};

export default UserInfo;
