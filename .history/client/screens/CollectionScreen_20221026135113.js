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
          <View key={item._id}>
            <Image
              className="w-40 h-40"
              source={{ uri: urlFor(item.image).url() }}
            />
            <Text>{item.name}</Text>
          </View>;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default CollectionScreen;
