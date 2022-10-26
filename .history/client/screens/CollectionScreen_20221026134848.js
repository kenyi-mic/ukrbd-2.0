import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const CollectionScreen = () => {
  const {
    params: { products },
  } = useRoute();
  return (
    <SafeAreaView>
      <View>
        {products?.map((item) => {
          <View key={item._id}>
            <Image
              className="w-40 h-40"
              source={{ uri: urlFor(item.image).url() }}
            />
          </View>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default CollectionScreen;
