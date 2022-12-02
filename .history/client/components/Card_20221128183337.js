import React from "react";
import { Image, Text, View } from "react-native";

const Card = ({ id, name, description, image }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Image className="w-40 h-40" source={{ uri: image }} />
    </View>
  );
};

export default Card;
