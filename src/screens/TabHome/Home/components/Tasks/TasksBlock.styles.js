import { StyleSheet } from "react-native";
import { LIGHT_COLOR, PRIMARY_COLOR, DARK_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  homeTasks: {
    backgroundColor: PRIMARY_COLOR,
    minHeight: 866,
    backgroundColor: PRIMARY_COLOR,
    paddingBottom: 40,
  },

  title: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: LIGHT_COLOR,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 40,
    marginRight: 35,
  },

  task: {
    marginTop: 30,
  },

  taskTitle: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 30,
    color: LIGHT_COLOR,
    alignSelf: "flex-start",
    paddingBottom: 20,
    marginLeft: 20,
  },

  aboutTask: {
    marginBottom: 10,
  },

  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20,
  },

  taskItemText: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 20,
    color: DARK_COLOR,
    paddingLeft: 20,
    width: "70%",
  },

  buttonAbout: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: LIGHT_COLOR,
    borderRadius: 2,
    borderWidth: 2,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    fontSize: 20,
  },

  buttonAboutText: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 20,
    color: LIGHT_COLOR,
    textAlign: "center",
  },
});
