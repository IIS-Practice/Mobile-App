import { StyleSheet } from "react-native";
import { LIGHT_COLOR, DARK_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat Regular 400",
    marginBottom: 30,
    textAlign: "left",
    width: "100%",
    color: DARK_COLOR,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 40,
    marginBottom: 40,
  },
});
