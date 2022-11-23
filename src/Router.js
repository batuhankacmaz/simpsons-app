import {View, Text} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Simpsons from "./screens/Simpsons";
import Details from "./screens/Details";
import Create from "./screens/Create";

const Stack = createStackNavigator();

const SimpsonsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Simpsons} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Create"
        component={Create}
        options={{title: "Add New Character"}}
      />
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
