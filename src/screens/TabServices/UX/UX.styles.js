import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    paddingHorizontal: "5%",
  },
  headerText: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: DARK_COLOR,
    textAlign: "left",
    paddingRight: "20%",
    paddingTop: 40,
    paddingBottom: 30,
  },
  designWord: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: PRIMARY_COLOR,
    textAlign: "left",
  },
  text: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    color: DARK_COLOR,
  },
  exampleContainers: {
    display: "flex",
    marginVertical: 30,
    rowGap: 20,
  },
  example: {
    width: "100%",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  exampleText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 20,
    color: LIGHT_COLOR,
    paddingVertical: 10,
  },
  textsContainer: {
    marginBottom: 40,
    rowGap: 20,
  },
  anotherContainer: {
    marginHorizontal: "-5%",
    paddingHorizontal: "5%",
    paddingVertical: 30,
    backgroundColor: PRIMARY_COLOR,
  },
  anotherContainerHeading: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: LIGHT_COLOR,
  },
  anotherContainerText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    color: LIGHT_COLOR,
    paddingVertical: 20,
  },
  anotherContainerPoints: {
    rowGap: 20,
  },
  pointWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  anotherContainerPointsText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 18,
    color: LIGHT_COLOR,
  },
  nestedPointWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    columnGap: 15,
    paddingRight: "18%",
  },
  star: {
    width: 36,
    height: 36,
  },
  priceContainer: {
    paddingBottom: 30,
  },
  priceHeading: {
    fontFamily: "Montserrat SemiBold 600",
    fontSize: 30,
    color: PRIMARY_COLOR,
    textAlign: "center",
    paddingTop: 30,
  },
  pricePoints: {
    marginTop: 30,
    rowGap: 15,
  },
  pricePoint: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 20,
    color: PRIMARY_COLOR,
  },
});
