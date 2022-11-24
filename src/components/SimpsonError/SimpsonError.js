import {View, Text} from "react-native";
import React from "react";
import styles from "./SimpsonError.styles";

const SimpsonError = ({text}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  );
};

export default SimpsonError;
