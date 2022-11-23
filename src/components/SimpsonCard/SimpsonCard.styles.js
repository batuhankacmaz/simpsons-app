import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  nameContainer: {
    flex: 8,
  },
  itemContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginLeft: 10,
    width: 20,
    height: 40,
    resizeMode: "stretch",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
});
