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
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import {
  ArrowTopRightOnSquareIcon,
  ArrowUpOnSquareIcon,
  ArrowUpRightIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  const session = true;

  console.log(session.name);
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
      <View>
        <View>
          <Text className="text-xl font-light">Hello,</Text>
          <Text>User</Text>
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
