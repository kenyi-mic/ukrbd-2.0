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
      <View className="flex flex-row justify-between mx-4">
        <Text className="text-yellow-500">UKRBD</Text>
        <View className="flex flex-row space-x-2">
          <BellIcon size={30} color="black" />
          <MagnifyingGlassIcon color="black" size={30} />
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
