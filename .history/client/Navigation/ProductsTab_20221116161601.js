import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import { HomeIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import ProductsScreen from "../screens/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ProductsTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Fashion"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={30} />,
        }}
      />

      <Tab.Screen
        name="My Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingCartIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingCartIcon color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProductsTab;
