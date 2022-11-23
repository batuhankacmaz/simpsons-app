import {View, Text, Image} from "react-native";
import React from "react";
import styles from "./Details.styles";

const Details = ({route}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>{item.name}</Text>
        <Text style={styles.subHeader}>{item.job}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Details;
