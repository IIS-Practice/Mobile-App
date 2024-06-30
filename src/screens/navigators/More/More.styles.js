import { StyleSheet } from "react-native";
import { LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: 40,
    width: "100%",
    justifyContent: "space-between",
    gap: 20,
    paddingBottom: 40,
  },
});
