import { StyleSheet } from "react-native";
import { DARK_COLOR, LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: LIGHT_COLOR,
    width: "100%",
    minHeight: 22,
    borderRadius: 0,
  },
  buttonText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
  },
  arrowIcon: {
    width: 15,
    height: "auto",
  },
});
