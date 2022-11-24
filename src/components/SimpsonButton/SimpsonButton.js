import {View, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./SimpsonButton.styles";

const SimpsonButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default SimpsonButton;
