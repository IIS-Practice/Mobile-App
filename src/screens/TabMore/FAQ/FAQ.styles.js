import { StyleSheet } from "react-native";
import { LIGHT_COLOR, DARK_COLOR, PRIMARY_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    paddingHorizontal: "5%",
    paddingBottom: 0,
    paddingTop: 30,
  },
  headerText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat Medium 500",
    fontSize: 30,
    width: "100%",
    marginBottom: 30,
  },
  questionButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    marginBottom: 20,
  },
  questionText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    marginLeft: 25,
  },
  answerText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 16,
    marginBottom: 20,
  },
  arrowIcon: {
    width: 41,
    height: 38,
    verticalAlign: "middle",
  },
  rotateArrowIcon: {
    transform: [{ rotateZ: "90deg" }],
  },
});
