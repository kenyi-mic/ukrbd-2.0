import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            className="w-full"
            source={{
              uri: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
