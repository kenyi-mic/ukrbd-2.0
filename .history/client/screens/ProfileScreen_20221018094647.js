import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text className="text-lg text-yellow-500 text-center">
        Edit your profile here
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default withAuthenticator(ProfileScreen);
