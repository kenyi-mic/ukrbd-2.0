import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileBotton = ({ action, title }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${action}`)}
      className="bg-white p-2 rounded border w-40"
    >
      <Text className="text-xl text-gray-800 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileBotton;
