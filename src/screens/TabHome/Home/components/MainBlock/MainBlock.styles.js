import { StyleSheet } from "react-native";
import { LIGHT_COLOR, PRIMARY_COLOR, DARK_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  mainBlock: {
    width: "100%",
    height: 287,
    backgroundColor: PRIMARY_COLOR,
  },

  companyName: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingTop: 50,
    zIndex: 1,
  },

  textContainer: {
    paddingBottom: 40,
  },

  heading1: {
    fontFamily: "NotoSerifGujarati Medium 500",
    fontSize: 40,
    color: LIGHT_COLOR,
  },

  heading2: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 30,
    color: LIGHT_COLOR,
  },

  companyImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    transform: [{ scaleX: -1 }],
  },

  submitApplication: {
    backgroundColor: LIGHT_COLOR,
    width: 200,
    height: 40,
    marginTop: 20,
    marginBottom: 26,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center", 
  },

  submitApplicationText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 14,
    color: DARK_COLOR,
  },
});
