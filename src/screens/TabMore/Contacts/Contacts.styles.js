import { StyleSheet } from "react-native";
import { LIGHT_COLOR, DARK_COLOR, PRIMARY_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    width: "100%",
    paddingHorizontal: "5%",
    paddingBottom: 30,
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  contactBlock: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
  contactTitle: {
    fontFamily: "Montserrat Medium 500",
    fontSize: 25,
    color: DARK_COLOR,
    textAlign: "center",
    marginBottom: 20,
  },
  contactText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    color: DARK_COLOR,
    textAlign: "center",
    marginBottom: 30,
  },
  contactLink: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 18,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  formTitle: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: DARK_COLOR,
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  titleHighlighting: {
    color: PRIMARY_COLOR,
  },
  formDescription: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 16,
    color: DARK_COLOR,
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
});
