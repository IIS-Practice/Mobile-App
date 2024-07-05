import { StyleSheet } from "react-native";
import {
  LIGHT_COLOR,
  PRIMARY_COLOR,
  DARK_COLOR,
  SECONDARY_COLOR,
} from "@utils/colors";

export const styles = StyleSheet.create({
  homeProjects: {
    width: "100%",
    backgroundColor: LIGHT_COLOR,
  },

  homeBox: {
    margin: 40,
    marginHorizontal: 20,
  },

  heading: {
    fontFamily: "Montserrat SemiBold 600",
    color: DARK_COLOR,
    fontSize: 30,
    marginBottom: 20,
  },

  projectText: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 18,
    color: DARK_COLOR,
    lineHeight: 24.38,
    marginBottom: 20,
  },

  smallProjectsWrapper: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  navButton: {
    top: "50%",
    transform: [{ translateY: -50 }],
  },

  navButtonLeft: {
    position: "absolute",
    left: -10,
  },

  navButtonRight: {
    position: "absolute",
    right: -10,
  },

  projectSmall: {
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    height: 160,
    width: "80%",
    display: "none",
    justifyContent: "center",
  },

  activeProject: {
    display: "flex",
    padding: 15,
  },

  projectContent: {
    height: "100%",
  },

  projectDescription: {
    fontSize: 18,
    marginBottom: 20,
  },

  contentName: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 17,
    color: LIGHT_COLOR,
    marginBottom: 10,
  },

  contentDescription: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 13,
    color: LIGHT_COLOR,
  },

  contentButton: {
    alignSelf: "flex-start",
    marginTop: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  textButton: {
    color: LIGHT_COLOR,
  },

  contentButtonHover: {
    color: SECONDARY_COLOR,
  },
});
