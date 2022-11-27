import { View, Text } from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";

const UserIcon = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default withAuthenticator(UserIcon);
