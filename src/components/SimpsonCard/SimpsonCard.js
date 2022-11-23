import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./SimpsonCard.styles";
import {FontAwesome} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import SimpsonButton from "../SimpsonButton";
const SimpsonCard = ({item, navigation}) => {
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <View style={styles.itemContainer}>
        <Text>{item.index}</Text>
        <Image style={styles.avatar} source={{uri: item.item.avatar}} />
      </View>
      <View style={styles.nameContainer}>
        <Text>{item.item.name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <SimpsonButton
          children={<AntDesign name="upcircleo" size={24} color="green" />}
        />
        <SimpsonButton
          children={<AntDesign name="downcircleo" size={24} color="red" />}
        />

        <SimpsonButton
          children={<FontAwesome name="trash-o" size={24} color="black" />}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SimpsonCard;
