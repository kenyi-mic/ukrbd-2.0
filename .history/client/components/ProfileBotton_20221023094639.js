import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileBotton = ({ action, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${action}`)}
      className="bg-white p-2 rounded border w-40 items-center"
    >
      <Text className="text-xl text-gray-800 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileBotton;
