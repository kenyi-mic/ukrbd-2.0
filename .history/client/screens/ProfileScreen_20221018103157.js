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
import { SignedOutMessage } from "aws-amplify-react-native/dist/AmplifyUI";

const ProfileScreen = () => {
  const session = Auth.signOut();

  console.log(session.name);
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity onPress={session}>
        <Text>Sign Out</Text>
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