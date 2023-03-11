import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Pagination = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: "#ccc",
  },
});
