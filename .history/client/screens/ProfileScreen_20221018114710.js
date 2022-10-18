import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
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
      <View className="flex flex-row justify-between px-4 bg-gradient-to-r from-red-500 to-blue-500 ">
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />
        {/*Logo*/}
        <View>
          <Image
            className="w-40 h-20"
            source={{ uri: "https://ukrbd.com/images/website/logo-ukr.png" }}
          />
        </View>
        <View className="flex flex-row space-x-2 ">
          <BellIcon size={30} color="gold" />
          <MagnifyingGlassIcon color="gold" size={30} />
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
