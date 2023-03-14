import { StyleSheet, View, Dimensions, Animated } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const ProductPagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWith = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", "#fff", "#ccc"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWith, backgroundColor },
              //   idx === index ? styles.dotActive : null,
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default ProductPagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    bottom: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
  dotActive: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 2,
  },
});
