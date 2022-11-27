import { View, Text } from "react-native";
import React from "react";

const TestItems = ({ id, name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default TestItems;
