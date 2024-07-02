import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, DARK_COLOR, LIGHT_COLOR } from "@utils/colors";
import { SECONDARY_COLOR } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    paddingHorizontal: '5%',
  },
  headerText: {
    fontFamily: 'NotoSerifGujarati Medium 500',
    fontSize: 20,
    color: DARK_COLOR,
    textAlign: 'left',
  },
  nestedPointWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    paddingRight: '20%',
  },
  text: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 18,
    color: DARK_COLOR,
  },
  star: {
    width: 36,
    height: 36,
  },
  stagesContainer: {
    marginTop: 40,
    marginHorizontal: '-5%',
    paddingVertical: 30,
    paddingHorizontal: '5%',
    backgroundColor: PRIMARY_COLOR,
  },
  stagesContainerHeading: {
    fontFamily: 'Montserrat SemiBold 600',
    fontSize: 30,
    color: LIGHT_COLOR,
    marginBottom: 25,
  },
  stagesPoints: {
    marginBottom: 30,
    rowGap: 15,
  },
  point: {
    cursor: 'pointer',
    minHeight: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9694cf',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    columnGap: 12,
  },
  pointNumber: {
    fontFamily: 'Montserrat SemiBold 600',
    color: LIGHT_COLOR,
    fontSize: 25,
  },
  pointText: {
    flex: 1,
    fontFamily: 'Montserrat Regular 400',
    color: LIGHT_COLOR,
    fontSize: 18,
  },
  active: {
    backgroundColor: SECONDARY_COLOR,
  },
  pointDescription: {
    flex: 1,
  },
  descriptionHeading: {
    fontFamily: 'Montserrat SemiBold 600',
    fontSize: 25,
    marginBottom: 20,
    color: LIGHT_COLOR,
  },
  stageDescription: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 20,
    color: LIGHT_COLOR,
  },
  priceContainer: {
    paddingBottom: 30,
  },
  priceHeading: {
    fontFamily: 'Montserrat SemiBold 600',
    fontSize: 30,
    color: PRIMARY_COLOR,
    textAlign: 'center',
    paddingTop: 30,
  },
  points: {
    marginTop: 30,
    rowGap: 15,
  },
  pricePoint: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 20,
    color: PRIMARY_COLOR,
  }
});
