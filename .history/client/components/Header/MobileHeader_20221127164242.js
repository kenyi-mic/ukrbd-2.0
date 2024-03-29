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
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";

const MobileHeader = () => {
  const SignIn = () => {
    return <UserIcon color="gold" size={30} />;
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
        <SignIn />
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
