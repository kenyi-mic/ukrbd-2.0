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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ProductsScreen from "../screens/ProductsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileImageScreen from "../screens/ProfileImageScreen";

//Home children screen
const Homestack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="category"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//profile Children screen
const profileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profileS"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={ProfileImageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppTab = () => {
  const items = useSelector(selectBasketItems);

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Homestack}
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
    backgroundColor: "#D7032A",
    width: 15,
    height: 15,
    position: "absolute",
    borderRadius: 100,
    top: 0,
    right: 32,
  },
  text: {
    position: "relative",
    color: "white",
    fontSize: 10,
    padding: 2,
    textAlign: "center",
  },
});
export default AppTab;
