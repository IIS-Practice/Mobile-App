import { StyleSheet } from "react-native";
import { LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    gap: 30,
  },
});
