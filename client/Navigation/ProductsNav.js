import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons/faPersonDress";
import { faShirt } from "@fortawesome/free-solid-svg-icons/faShirt";
import { faPersonDressBurst } from "@fortawesome/free-solid-svg-icons/faPersonDressBurst";
import { Entypo } from "@expo/vector-icons";
import { HomeIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import ProductsScreen from "../screens/ProductsScreen";
import SkirtScreen from "../screens/SkirtScreen";
import ShirtScreen from "../screens/ShirtScreen";
import TrouserScreen from "../screens/TrouserScreen";

const ProductsNav = () => {
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
        name="Skirt"
        component={SkirtScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={30} color={color} icon={faPersonDress} />
          ),
        }}
      />
      <Tab.Screen
        name="Shirt"
        component={ShirtScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={30} color={color} icon={faShirt} />
          ),
        }}
      />
      <Tab.Screen
        name="Trouser"
        component={TrouserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="man" size={30} color={color} />
          ),
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
    </Tab.Navigator>
  );
};

export default ProductsNav;
