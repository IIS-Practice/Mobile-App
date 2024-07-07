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
  WorkerInfo: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    height: 170,
    width: "45.3%",
    marginBottom: 15,
    alignItems: "center",
  },
  info: {
    fontSize: 18,
    fontFamily: "Montserrat Regular 500",
    fontWeight: 500,
    marginBottom: 15,
    textAlign: "center",
    width: "100%",
    color: DARK_COLOR,
  },
  stack: {
    fontSize: 18,
    fontFamily: "Montserrat Regular 400",
    fontWeight: 400,
    marginBottom: 25,
    textAlign: "center",
    width: "100%",
    color: DARK_COLOR,
  }
  });