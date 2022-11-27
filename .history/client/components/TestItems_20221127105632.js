import { View, Text } from "react-native";
import React from "react";

const TestItems = ({ id, name }) => {
  return (
    <View>
      <Text>{name}</Text>
      <TouchableOpacity>
        <Text className="mx-2 text-xl font-bold bg-gray-200 w-24 p-2">
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestItems;
