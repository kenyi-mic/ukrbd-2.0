import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Container}>
      <View className="flex flex-row justify-between px-4 py-2 ">
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(226,216,49,0.8)", "transparent"]}
          style={styles.background}
        />
        {/*Logo*/}
        <Pressable
          onPress={() => navigation.navigate("home")}
          className="flex items-center"
        >
          <Image
            resizeMode="contain"
            className="w-24 h-12"
            source={require("../src/images/logo-ukr-removebg-preview.png")}
          />
        </Pressable>
        <View className="flex flex-row space-x-2 ">
          <BellIcon size={30} color="#1365DF" />
          <MagnifyingGlassIcon color="#1365DF" size={30} />
        </View>
      </View>
      {/*user info*/}
      <View className="flex flex-row justify-between mx-4">
        <View className="flex flex-row space-x-2">
          <Text className="text-xl font-light">Hello,</Text>
          <Pressable onPress={() => navigation.navigate("account")}>
            <Text className="text-xl font-bold">User</Text>
          </Pressable>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("account")}>
          <Image
            className="w-10 h-10 rounded-full bg-white p-1 border-2"
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png",
            }}
          />
        </TouchableOpacity>
      </View>
      {/* Bottons */}
      <View className="mx-4 items-center">
        <View className="flex flex-row items-center space-x-2">
          <TouchableOpacity className="bg-white p-2 rounded border">
            <Text className="text-xl text-gray-800 font-semibold">
              Shopping Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-2 rounded border">
            <Text className="text-xl text-gray-800 font-semibold">Orders</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
export default withAuthenticator(ProfileScreen);
