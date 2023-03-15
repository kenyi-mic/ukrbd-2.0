import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import StoreScreen from "../screens/StoreScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileImageScreen from "../screens/ProfileImageScreen";
import SelectPhotosScreen from "../screens/SelectPhotosScreen";
import AccountScreen from "../screens/AccountScreen";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  selectBasketItems,
  selectTotalQuantity,
} from "../features/basketSlice";

//Home children screen
const Homestack = () => {
  const quantity = useSelector(selectBasketItems);
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
const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profileS"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="edit profile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="select profile image"
        component={ProfileImageScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="select photo"
        component={SelectPhotosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppTab = () => {
  const quantity = useSelector(selectTotalQuantity);

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "orange",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="store" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="My Cart"
        component={CartScreen}
        options={{
          tabBarBadge: quantity,
          tabBarBadgeStyle: { color: "white", backgroundColor: "darkorange" },
          tabBarIcon: ({ color }) => (
            <>
              <View style={styles.cartIcon}>
                <FontAwesome5 name="shopping-cart" size={26} color={color} />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={26} color={color} />
          ),
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
    borderRadius: 50,

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
