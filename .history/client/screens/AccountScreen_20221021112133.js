import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { CameraIcon } from "react-native-heroicons/solid";

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            className="w-full h-40"
            source={{
              uri: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Pressable className="absolute">
            <CameraIcon color="white" size={35} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
