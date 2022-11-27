import { View, Text } from "react-native";
import React from "react";

const TestScreen = ({ navigation, route }) => {
  const routeItem = route.params;
  return (
    <View>
      <Text>{routeItem.name}</Text>
    </View>
  );
};

export default TestScreen;
