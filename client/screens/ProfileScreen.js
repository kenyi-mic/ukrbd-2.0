import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ProfileBotton from "../components/ProfileBotton";
import { selectBasketItems } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { urlFor } from "../sanity";
import UserInfo from "../components/UserInfo";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar className="bg-orange-500" />
      <ScrollView>
        <View className="flex flex-row justify-between px-4 py-2 ">
          <LinearGradient
            // Background Linear Gradient
            colors={["orange", "transparent"]}
            style={styles.background}
          />
          {/*Logo*/}
          <Pressable
            onPress={() => navigation.navigate("Home")}
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
        <UserInfo
          key={user?.attributes.sub}
          id={user?.attributes.sub}
          username={user?.username}
          email={user?.attributes.email}
          onPress={() =>
            navigation.navigate("account", {
              id: user?.attributes.sub,
              username: user?.username,
              email: user?.attributes.email,
              phoneNumber: user?.attributes.phone_number,
            })
          }
        />
        {/* Bottons */}
        <View className="m-4 items-center">
          <View className="flex flex-row items-center justify-between w-full my-2">
            <ProfileBotton title="Orders" action="orders" />
            <ProfileBotton title="Buy Again" action="orders" />
          </View>
          <View className="flex flex-row items-center justify-between w-full my-2">
            <ProfileBotton
              title="Account"
              onPress={() =>
                navigation.navigate("account", {
                  id: user?.attributes.sub,
                  username: user?.username,
                  email: user?.attributes.email,
                  phoneNumber: user?.attributes.phone_number,
                })
              }
            />
            <ProfileBotton
              title="Shopping List"
              onPress={() => navigation.navigate("My Cart")}
            />
          </View>
        </View>

        {/* Orders */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Your Orders
          </Text>
          <Text className="text-xs font-light italic">
            Hey, your recent orders will appear here.
          </Text>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* Keep Shopping */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Keep Shopping
          </Text>
          <Text className="text-xs font-light italic">
            Your recent visited product appear here
          </Text>
        </View>

        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* your shopping list */}
        <View className="mx-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Shopping List
          </Text>
          <Text className="text-sm ">Your shoping List</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("My Cart")}
              className="rounded-lg border p-2 flex-row justify-between"
            >
              {items.map((item) => (
                <Image
                  key={item.id}
                  className="w-12 h-16 mx-1 rounded-sx bg-white"
                  resizeMode="contain"
                  source={{
                    uri: urlFor(item?.image).url(),
                  }}
                />
              ))}
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* Ruler*/}
        <View className="w-full h-1 bg-gray-300 my-8"></View>
        {/* your shopping list */}
        <View className="mx-4 my-4">
          <Text className="text-xl font-semibold text-gray-600 my-3">
            Buy Again
          </Text>

          <Text className="text-sm pb-2">
            Recheck items from your previous collections
          </Text>
          <TouchableOpacity className="my-2 bg-orange-300 p-2 w-40 items-center rounded">
            <Text className="text-lg font-semibold text-gray-700">
              Visit Buy Again
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {},
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
export default withAuthenticator(ProfileScreen);
