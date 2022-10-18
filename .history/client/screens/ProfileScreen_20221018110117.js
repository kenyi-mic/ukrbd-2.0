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
} from "react-native-heroicons/solid";

const ProfileScreen = () => {
  const session = true;

  console.log(session.name);
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Text>UKRBD</Text>
        <View>
          <BellIcon size={30} color="black" />
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
