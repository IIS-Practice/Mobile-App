import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    paddingHorizontal: "5%",
    paddingVertical: 40,
  },
  headerText: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 25,
    color: DARK_COLOR,
    textAlign: "left",
    marginBottom: 56,
  },
  logoText: {
    fontFamily: "NotoSerifGujarati Medium 500",
    fontSize: 25,
    color: DARK_COLOR,
  },
  elementContainer: {
    alignItems: "center",
    marginBottom: 46,
    width: "100%",
  },
  line: {
    width: "100%",
    height: 4,
    backgroundColor: PRIMARY_COLOR,
    position: "relative",
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 100,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -26,
  },
  circleText: {
    color: LIGHT_COLOR,
    fontSize: 30,
    fontFamily: "Montserrat Medium 500",
    textAlign: "center",
    height: "93%",
  },
  elementText: {
    fontFamily: "Montserrat Regular 400",
    textAlign: "center",
    fontSize: 18,
    color: DARK_COLOR,
    maxWidth: "90%",
    marginTop: 41,
  },
});
