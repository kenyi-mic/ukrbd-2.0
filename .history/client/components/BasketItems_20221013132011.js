import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const BasketItems = ({
  id,
  name,
  image,
  images,
  description,
  price,
  rating,
}) => {
  return (
    <View className="px-4 py-6 ">
      <View className="flex flex-row space-x-3">
        {/* <Image
          className="w-20 h-40 shadow-sm "
          source={{ uri: urlFor(image).url() }}
        /> */}

        <View className="">
          <Text className="text-xl font-bold text-gray-500 ">{name}</Text>
          <Text className="text-sm font-light ">{description}</Text>
          <View>
            <Text>QTY: 1</Text>
            <View className="flex flex-row items-center space-x-2">
              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon color="#FF9900" size={30} />
              </TouchableOpacity>
              {count && <Text className="text-lg font-bold">{count}</Text>}
              <TouchableOpacity>
                <MinusCircleIcon color="#FF9900" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketItems;
