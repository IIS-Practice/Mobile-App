import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: 40,
    paddingBottom: 90,
    width: "100%",
  },
  headerText: {
    width: "100%",
    fontSize: 30,
    color: LIGHT_COLOR,
    fontFamily: "Montserrat Regular 400",
    paddingBottom: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: LIGHT_COLOR,
  },
});
