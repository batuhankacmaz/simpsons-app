import {View, Text, FlatList, ActivityIndicator} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectSimpsons, fetchSimpsons} from "../../redux/simpsonSlice";
import SimpsonCard from "../../components/SimpsonCard";
import SimpsonCreate from "../../components/SimpsonCreate";
import styles from "./Simpsons.styles";

const renderSeperator = () => <View style={styles.seperator} />;

const Home = ({navigation}) => {
  const simpsons = useSelector(selectSimpsons);
  const status = useSelector((state) => state.simpson.status);
  const dispatch = useDispatch();

  const renderItem = (item) => {
    return <SimpsonCard simpson={item} navigation={navigation} />;
  };

  useEffect(() => {
    dispatch(fetchSimpsons());
  }, []);

  return (
    <View style={styles.mainContainer} testID="view-simpsons">
      {status == "success" ? (
        <FlatList
          testID="list-simpsons"
          data={simpsons}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeperator}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
        />
      ) : (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#2e86de"
        />
      )}

      {status == "success" && (
        <View styles={styles.footerContainer}>
          <SimpsonCreate navigation={navigation} />
        </View>
      )}
    </View>
  );
};

export default Home;
