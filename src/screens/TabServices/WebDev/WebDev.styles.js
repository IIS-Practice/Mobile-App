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
    fontFamily: 'Montserrat SemiBold 600',
    fontSize: 30,
    color: DARK_COLOR,
    textAlign: 'left',
    paddingRight: '20%',
    paddingBottom: 30,
  },
  mistakesPoints: {
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
    color: DARK_COLOR,
  },
  mistakeDescription: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 18,
    marginBottom: 20,
    color: DARK_COLOR,
    paddingRight: '10%',
  },
  nestedPointWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    columnGap: 15,
    paddingRight: '18%',
  },
  star: {
    width: 36,
    height: 36,
  },
  nestedPoint: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 18,
    color: DARK_COLOR,
  },
  advContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: '-5%',
    paddingHorizontal: '5%',
    marginTop: 40,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: PRIMARY_COLOR,
  },
  advHeading: {
    fontFamily: 'Montserrat SemiBold 600',
    fontSize: 30,
    color: LIGHT_COLOR,
    paddingRight: '20%',
    marginBottom: 30,
  },
  advElementHeading: {
    fontFamily: 'NotoSerifGujarati Medium 500',
    fontSize: 25,
    color: LIGHT_COLOR,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  line: {
    marginTop: 41,
    marginBottom: 51,
    borderWidth: 1,
    borderColor: LIGHT_COLOR,
    position: 'relative',
  },
  circleWrapper: {
    position: 'absolute',
    top: -21, 
    left: '50%',
    transform: [{ translateX: -21 }],
  },
  hiddenText: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 18,
    color: LIGHT_COLOR,
    paddingBottom: 10,
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
  pricePoints: {
    marginTop: 30,
    rowGap: 15,
  },
  pricePoint: {
    fontFamily: 'Montserrat Regular 400',
    fontSize: 20,
    color: PRIMARY_COLOR,
  }
});
