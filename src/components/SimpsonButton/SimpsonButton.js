import {View, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./SimpsonButton.styles";

const SimpsonButton = ({children}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      {children}
    </TouchableOpacity>
  );
};

export default SimpsonButton;
