import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import client from "../../sanity";

const MobileHeader = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type=="products"]{
      ...,
      rows[]->{
        ...,
        products[]->{
            ...,
          images[]->{
            ...,
          }
        }
      }
    }
    `
      )
      .then((data) => {
        let newArray = data.map((item) => {
          return { key: item._id, value: item.name };
        });
        setItems(newArray);
      });
  });
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center justify-center p-4 ">
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon color="black" size={30} />
        </TouchableOpacity>
        <SelectList
          setSelected={setSelected}
          data={items}
          onSelect={() => alert(selected)}
        />
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
