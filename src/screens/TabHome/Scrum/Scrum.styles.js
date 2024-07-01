import { StyleSheet } from "react-native";
import { LIGHT_COLOR, DARK_COLOR, PRIMARY_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: 40,
  },
  headerText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    width: "100%",
    textAlign: "left",
    marginBottom: 30,
  },
  descriptionText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    width: "100%",
    textAlign: "left",
    marginBottom: 25,
  },
  scrumContent: {
    paddingBottom: 15,
    width: "100%",
  },
  sprintContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 40,
    gap: 150,
    width: "100%",
    paddingRight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  sprint: {
    width: "33.3%",
    marginRight: "auto",
  },
  sprintTitle: {
    fontFamily: "Montserrat Medium 500",
    color: DARK_COLOR,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 11,
  },
  wordsBlock: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderColor: PRIMARY_COLOR,
    gap: 15,
    paddingTop: 5,
    paddingBottom: 15,
  },
  word: {
    fontFamily: "Montserrat Medium 500",
    color: DARK_COLOR,
    fontSize: 20,
  },
  horizontalLine: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
  },
  arrowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: 150,
    paddingHorizontal: 40,
  },
  arrowWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
  arrowTitle: {
    fontFamily: "Montserrat Medium 500",
    color: LIGHT_COLOR,
    fontSize: 20,
    lineHeight: 23,
    marginRight: 18,
  },
  arrow: {
    height: 50,
    width: "auto",
  },
});
