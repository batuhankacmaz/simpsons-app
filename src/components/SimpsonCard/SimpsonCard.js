import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteSimpson, upSimpson, downSimpson} from "../../redux/simpsonSlice";
import styles from "./SimpsonCard.styles";
import {FontAwesome} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import SimpsonButton from "../SimpsonButton";

const SimpsonCard = ({simpson, navigation}) => {
  const cardNumber = simpson.index + 1;
  const navigateToDetails = () => {
    navigation.navigate("Details", simpson.item);
  };
  const dispatch = useDispatch();
  const onDeleteSimpson = () => {
    dispatch(deleteSimpson(simpson.item.id));
  };
  const onUpSimpson = () => {
    dispatch(upSimpson(simpson.item.id));
  };
  const onDownSimpson = () => {
    dispatch(downSimpson(simpson.item.id));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <View style={styles.itemContainer}>
        <Text>{cardNumber}</Text>
        <Image style={styles.avatar} source={{uri: simpson.item.avatar}} />
      </View>
      <View style={styles.nameContainer}>
        <Text>{simpson.item.name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <SimpsonButton
          children={<AntDesign name="upcircleo" size={24} color="green" />}
          onPress={onUpSimpson}
        />
        <SimpsonButton
          children={<AntDesign name="downcircleo" size={24} color="red" />}
          onPress={onDownSimpson}
        />
        <SimpsonButton
          children={<FontAwesome name="trash-o" size={24} color="black" />}
          onPress={onDeleteSimpson}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SimpsonCard;
