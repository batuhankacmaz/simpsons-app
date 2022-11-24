import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import SimpsonLabel from "../../components/SimpsonLabel";
import SimpsonError from "../../components/SimpsonError";
import uuid from "react-native-uuid";
import {useDispatch} from "react-redux";
import {addSimpson, setLocalSimpsons} from "../../redux/simpsonSlice";
import styles from "./Create.styles";
const CreateCharacter = ({navigation}) => {
  const [fullname, setFullname] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (fullname && job && description && avatar) {
      const simpson = {name: fullname, avatar, job, description, id: uuid.v1()};
      dispatch(addSimpson(simpson));
      dispatch(setLocalSimpsons());
      navigation.navigate("Simpsons");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
  };

  return (
    <View style={styles.container}>
      {error && <SimpsonError text="You have to fill every part" />}
      <SimpsonLabel
        title="Name Surname:"
        style={{height: 40}}
        max={25}
        value={fullname}
        setValue={setFullname}
      />
      <SimpsonLabel
        title="Job Title:"
        style={{height: 40}}
        max={50}
        value={job}
        setValue={setJob}
      />
      <SimpsonLabel
        title="About Him/Her:"
        style={{height: 100}}
        max={500}
        value={description}
        setValue={setDescription}
      />
      <SimpsonLabel
        title="Image Link:"
        style={{height: 40}}
        max={120}
        value={avatar}
        setValue={setAvatar}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
        <Text style={styles.buttonText}>Add Character</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCharacter;
