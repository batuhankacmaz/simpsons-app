import {View, Text, Button, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectSimpsons, fetchSimpsons} from "../../redux/simpsonSlice";
import SimpsonCard from "../../components/SimpsonCard";
import styles from "./Simpsons.styles";

const renderSeperator = () => <View style={styles.seperator} />;

const Home = ({navigation}) => {
  const simpsons = useSelector(selectSimpsons);
  const status = useSelector((state) => state.simpson.status);
  const goToDetails = () => {
    navigation.navigate("Details");
  };

  const goToCreate = () => {
    navigation.navigate("Create");
  };

  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return <SimpsonCard item={item} navigation={navigation} />;
  };

  useEffect(() => {
    dispatch(fetchSimpsons());
  }, []);

  return (
    <View>
      {status == "success" ? (
        <FlatList
          data={simpsons}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeperator}
          keyExtractor={({item}) => item.id}
        />
      ) : (
        <Text>Loading</Text>
      )}
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
