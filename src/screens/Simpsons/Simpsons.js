import {View, Text, Button} from "react-native";
import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Home = ({navigation}) => {
  const goToDetails = () => {
    navigation.navigate("Details");
  };

  const goToCreate = () => {
    navigation.navigate("Create");
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={goToCreate} accessibilityLabel="Create" title="Create" />
      <Button
        onPress={goToDetails}
        accessibilityLabel="Details"
        title="Details"
      />
    </View>
  );
};

export default Home;
