import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileBotton = () => {
  return (
    <TouchableOpacity className="bg-white p-2 rounded border w-40">
      <Text className="text-xl text-gray-800 font-semibold">Your Account</Text>
    </TouchableOpacity>
  );
};

export default ProfileBotton;
