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
} from "react-native-heroicons/solid";

const MobileHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center justify-center p-4 ">
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon color="black" size={30} />
        </TouchableOpacity>
        <View className="flex flex-row items-center bg-white p-2 w-11/12 shadow-md rounded-lg mx-2">
          <MagnifyingGlassIcon color="black" size={20} />
          <TextInput
            placeholder="Search on ukrbd.com"
            className="w-full mx-2"
          />
        </View>
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
