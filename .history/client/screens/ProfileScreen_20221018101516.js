import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { SignIn } from "aws-amplify-react-native/dist/Auth";

const ProfileScreen = ({ signOut, user }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text className="text-lg text-yellow-500 text-center">
        Edit your profile here
      </Text>
      <TouchableOpacity onPress={session}>
        {!session ? <Text>Sign Out</Text> : <Text>Sign In </Text>}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default withAuthenticator(ProfileScreen);
