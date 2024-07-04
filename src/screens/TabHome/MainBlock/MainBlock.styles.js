import { StyleSheet } from "react-native";
import { LIGHT_COLOR, PRIMARY_COLOR, DARK_COLOR } from "@utils/colors"; 

export const styles = StyleSheet.create({
  mainBlock: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    backgroundColor: PRIMARY_COLOR,
  },
  companyName: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 50,
    zIndex: 2,
  },
  companyImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    paddingBottom: 40,
    textAlign: "left",
  },
  heading1: {
    fontFamily: "NotoSerifGujarati Medium 500",
    fontSize: 40,
    margin: 0,
    color: LIGHT_COLOR,
  },
  heading2: {
    fontSize: 30,
    fontWeight: "500",
    margin: 0,
    fontFamily: "Montserrat Medium 500",
    color: LIGHT_COLOR,
  },
  companyImage: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    transform: [{ scaleX: -1 }],
    position: "relative",
  },
  submitApplication: {
    backgroundColor: LIGHT_COLOR,
    borderColor: LIGHT_COLOR,
    color: DARK_COLOR,
    width: 200,
    height: 40,
    marginTop: 20,
    marginBottom: 26,
    borderRadius: 2,
    fontSize: 14,
    paddingVertical: 11,
    paddingHorizontal: 40,
    alignItems: "center",
  },
});
