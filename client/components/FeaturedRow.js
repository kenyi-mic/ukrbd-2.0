import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ProductCard from "./ProductCard";
import sanityClient from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturedRow = ({ id, title, description }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    sanityClient
      ?.fetch(
        `
    *[_type == "featured" && _id==$id]{
      ...,
      products[]->{
        ...,
        rows[]->{
          ...,
          products[]->{
            ...,
            images[]->{
              
            }
          }
        }
      }
    }[0]`,
        { id }
      )
      .then((data) => {
        setProducts(data?.products);
      });
  }, []);

  return (
    <View>
      <View className="mt-2 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{`${title} `}</Text>
        <Text className="text-sm text-yellow-500 font-semibold">
          Shop More{" > "}
        </Text>
      </View>
      <View style={styles.itemCards}>
        {/*ProductCards*/}
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product?._id}
            id={product?._id}
            imgUrl={product?.image}
            title={product?.name}
            description={product?.short_description}
            rows={product?.rows}
            onPress={() =>
              navigation.navigate("Products", {
                id: product._id,
                imgUrl: product.image,
                title: product.name,
                description: product.short_description,
                rows: product.rows,
              })
            }
          />
        ))}
      </View>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  itemCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
