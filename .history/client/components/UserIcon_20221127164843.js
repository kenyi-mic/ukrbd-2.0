import { View, Text } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";
import { UserIcon } from "react-native-heroicons/solid";

const UserIcon = () => {
  return (
    <View>
      <UserIcon color="gold" size={30} />
    </View>
  );
};

export default withAuthenticator(UserIcon);
