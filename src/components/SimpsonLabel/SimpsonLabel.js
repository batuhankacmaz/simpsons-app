import {View, Text, TextInput} from "react-native";
import React from "react";
import styles from "./SimpsonLabel.styles";
const SimpsonLabel = ({title, style, max, value, setValue, testID}) => {
  const handleChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        testID={testID}
        style={[style, styles.input]}
        maxLength={max}
        onChangeText={(text) => handleChangeText(text)}
        value={value}
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

export default SimpsonLabel;
