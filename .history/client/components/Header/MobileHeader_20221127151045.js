import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { Auth } from "aws-amplify";

const MobileHeader = () => {
  const signIn = () => {
    Auth.signIn({
      username: "mike",
      password: "lokoronyo",
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center justify-center p-4 ">
        <AdjustmentsHorizontalIcon color="gold" size={30} />
        <View className="flex flex-row items-center bg-white p-2 w-5/6 shadow-md rounded-lg mx-2">
          <MagnifyingGlassIcon color="black" size={20} />
          <TextInput
            placeholder="Search on ukrbd.com"
            className="w-full mx-2"
          />
        </View>
        <TouchableOpacity onPress={signIn}>
          <UserIcon size={30} color="gold" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default MobileHeader;
