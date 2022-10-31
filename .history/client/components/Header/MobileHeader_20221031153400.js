import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import client from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const MobileHeader = () => {
  const [items, setItems] = useState();

  const [selected, setSelected] = useState("");
  const navigation = useNavigation();
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
          return {
            key: item._id,
            id: item._id,
            title: item.name,
            value: item.name,
            imgUrl: item.image,
            rows: item.rows,
            description: item.short_description,
          };
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
          boxStyles={{ width: 320 }}
          inputStyles={{ fontSize: 20 }}
          dropdownStyles={{ backgroundColor: "white", height: 60 }}
          dropdownItemStyles={{}}
          onSelect={() =>
            navigation.navigate("Products", {
              id: items?.id,
              imgUrl: items?.imgUrl,
              title: items?.title,
              description: items?.description,
              rows: items?.rows,
            })
          }
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
