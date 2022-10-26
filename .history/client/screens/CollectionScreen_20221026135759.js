import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const CollectionScreen = () => {
  const {
    params: { products },
  } = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {products?.map((item) => {
          console.log(item.name);
        })}
      </View>
      <Text>Here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CollectionScreen;
