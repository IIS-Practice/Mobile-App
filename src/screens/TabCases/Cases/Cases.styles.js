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
  caseBlock: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: 227,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    flex: 1,
    fontFamily: "Montserrat SemiBold 600",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    paddingTop: 21,
  },
  descriptionText: {
    flex: 5,
    fontFamily: "Montserrat Regular 400",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 22,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  moreButton: {
    width: 335,
    height: 50,
    padding: "10, 39",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(112, 108, 255, 1)",
  },
  moreButtonEnable: {
    borderWidth: 2,
    borderColor: "rgba(112, 108, 255, 1)",
  },
  moreButtonDisable: {
    borderWidth: 2,
    borderColor: "rgba(107, 107, 107, 1)",
  },
  moreText: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 25,
  },
  moreTextDisable: {
    color: "rgba(107, 107, 107, 1)",
  },
  moreTextEnable: {
    color: "rgba(112, 108, 255, 1)",
  },
});
