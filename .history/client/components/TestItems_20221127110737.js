import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TestItems = ({ id, name, onPress }) => {
  return (
    <View>
      <Text>{name}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="mx-2 text-xl font-bold bg-gray-200 w-24 p-2">
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestItems;
