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
import { ArrowTopRightOnSquareIcon, ArrowUpOnSquareIcon, ArrowUpRightIcon } from "react-native-heroicons/solid";


const ProfileScreen = () => {
  const session = true;

  console.log(session.name);
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity onPress={}>
       {session ? <ArrowTopRightOnSquareIcon size={30} color="black"/> : <ArrowUpOnSquareIcon size={30} color="black"/>}
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
