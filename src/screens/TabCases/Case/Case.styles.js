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
  headerText: {
    color: DARK_COLOR,
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    width: "100%",
    textAlign: "left",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 141,
    borderRadius: 2,
    resizeMode: "stretch",
  },
  detailContainer: {
    backgroundColor: "rgba(141, 185, 252, 1)",
    height: 292,
    width: "120%",
    marginTop: 20,
  },
  detailHeader: {
    color: LIGHT_COLOR,
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 25,
    width: "100%",
    textAlign: "center",
    marginTop: 30,
  },
  detailText: {
    paddingLeft: "10%",
    color: LIGHT_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginTop: 20,
  },
  boldDetailText: {
    paddingLeft: "10%",
    color: LIGHT_COLOR,
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
  },
  costContainer: {
    paddingLeft: "10%",
    marginTop: 10,
  },
  starContainer: {
    paddingLeft: "8%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    width: "100%",
  },
  starImage: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "left",
    marginHorizontal: 7,
  },
});
