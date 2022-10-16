import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import StoreScreen from "../screens/StoreScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

import {
  BuildingStorefrontIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";

const AppTab = () => {
  const items = useSelector(selectBasketItems);

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BuildingStorefrontIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <View style={styles.cartIcon}>
                <ShoppingCartIcon color={color} size={30} />
              </View>
              {items.length !== 0 && (
                <View style={styles.textwrapper}>
                  <Text style={styles.text}>{items.length}</Text>
                </View>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <UserIcon color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  cartIcon: {
    position: "relative",
  },
  textwrapper: {
    alignItems: "center",
    backgroundColor: "maroon",
    width: 15,
  },
  text: {
    color: "green",
    fontSize: 10,
    borderRadius: 50,
    padding: 2,
  },
});
export default AppTab;
