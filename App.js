import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import "react-native-gesture-handler";
import {store} from "./src/redux/store";
import {Provider} from "react-redux";
import Router from "./src/Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
