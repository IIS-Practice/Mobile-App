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
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Montserrat SemiBold 600",
    marginBottom: 40,
    marginTop: 40,
    textAlign: "left",
    width: "100%",
    color: DARK_COLOR,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 30,
    marginBottom: 40,
  },
});
