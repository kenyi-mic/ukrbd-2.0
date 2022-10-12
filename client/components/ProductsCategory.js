import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const ProductsCategory = () => {
  return (
    <View>
      {/*Sales Catgory*/}
      <View>
        <Text className="m-3 text-lg font-bold">Top Sales</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/T-shirts.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Unisex Wear
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Electronics.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Gadgets
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Capentry.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Capentry
            </Text>
          </View>

          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Health.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Health
            </Text>
          </View>
        </ScrollView>
      </View>
      {/*Fashion Catgory*/}
      <View>
        <Text className="m-3 text-lg font-bold">Fashion</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/T-shirts.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Unisex Wear
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Shari.jpeg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Female Wear
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/T-shirt-black.webp")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Male Wear
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Kids.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Kids Wear
            </Text>
          </View>
        </ScrollView>
      </View>
      {/*Electronics Catgory*/}
      <View>
        <Text className="m-3 text-lg font-bold">Electronics</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Computers.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Computers
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/phone.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Cell Phones
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Game.jpg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Game
            </Text>
          </View>
          <View className="mx-3 bg-white w-28 items-center shadow">
            <Image
              className="w-full h-40"
              source={require("../src/images/products/Home.jpeg")}
            />
            <Text className="p-2 font-semibold text-sm text-gray-700">
              Home Applaince
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductsCategory;
