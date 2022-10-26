import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CollectionScreen = () => {
  const {
    params: { products },
  } = useRoute();
  return (
    <SafeAreaView>
      <View>
        {products.map((item) => {
          console.log(item);
        })}
      </View>
    </SafeAreaView>
  );
};

export default CollectionScreen;
