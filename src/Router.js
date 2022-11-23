import {View, Text} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Create from "./screens/Create";

const Stack = createNativeStackNavigator();

const SimpsonsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <SimpsonsStack />
    </NavigationContainer>
  );
};

export default Router;
