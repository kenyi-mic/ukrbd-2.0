import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CollectionItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("collection")}
        className="flex-1 mx-2 mb-4"
      >
        <Image
          className="w-full h-40"
          source={{ uri: urlFor(item.image).url() }}
        />

        <View className="bg-slate-700 w-full h-8 absolute bottom-0 opacity-75">
          <Text className="absolute bottom-2 left-10 text-center mt-8 text-lg pt-2 text-gray-100 font-semibold ">
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CollectionItem;
