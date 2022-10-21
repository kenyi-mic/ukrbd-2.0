import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppTab from "./AppTab";

import ProductDetails from "../screens/ProductDetails";
import ProductsScreen from "../screens/ProductsScreen";
import BaketScreen from "../screens/BasketScreen";

import CategoryScreen from "../screens/CategoryScreen";
import AccountScreen from "../screens/AccountScreen";
import SelectPhotosScreen from "../screens/SelectPhotosScreen";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          className="text-red-600"
          name="UKRBD"
          component={AppTab}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="basket"
          component={BaketScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="select photo"
          component={SelectPhotosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
