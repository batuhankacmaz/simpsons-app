import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import styles from "./SimpsonCreate.styles";
const SimpsonCreate = ({navigation}) => {
  const navigateToCreate = () => {
    navigation.navigate("Create");
  };
  return (
    <TouchableOpacity style={styles.createContainer} onPress={navigateToCreate}>
      <AntDesign name="pluscircle" size={48} color="#2E86DE" />
    </TouchableOpacity>
  );
};

export default SimpsonCreate;
