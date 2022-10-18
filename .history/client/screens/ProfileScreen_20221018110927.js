import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
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

const ProfileScreen = () => {
  const session = true;

  console.log(session.name);
  return (
    <SafeAreaView style={styles.Container}>
      <View className="flex flex-row justify-between px-4 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-1/2">
        <Text className="text-yellow-500 text-2xl font-bold">UKRBD</Text>
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
});
export default withAuthenticator(ProfileScreen);
