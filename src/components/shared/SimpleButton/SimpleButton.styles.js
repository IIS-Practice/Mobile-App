import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
  },
  buttonText: {
    color: LIGHT_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    textAlign: "center",
  },
});
