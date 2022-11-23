import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
  container: {
    padding: 15,
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  avatar: {
    width: (Dimensions.get("screen").width * 2) / 5,
    height: Dimensions.get("screen").height / 3,
    resizeMode: "stretch",
  },
  headerContainer: {
    alignItems: "center",
    margin: 15,
  },
  mainHeader: {
    fontSize: 25,
  },
  subHeader: {
    fontSize: 16,
    color: "gray",
  },
  descriptionText: {
    fontSize: 14,
    color: "gray",
  },
});
