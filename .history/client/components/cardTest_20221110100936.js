import { Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";

const CardTest = ({ id, name, price }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default CardTest;
