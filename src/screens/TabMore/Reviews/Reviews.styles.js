import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  DARK_COLOR,
  LIGHT_COLOR,
} from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
  },
  content: {
    paddingHorizontal: "5%",
  },
  reviewContainer: {
    height: 460,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: PRIMARY_COLOR,
    marginTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 25,
    position: 'relative',
  },
  leftButton: {
    position: 'absolute',
    top: 200,
    left: 5,
  },
  rightButton: {
    position: 'absolute',
    top: 200,
    right: 5,
  },
  hiddenButton: {
    opacity: 0,
  },
  imageAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  nameText: {
    flex: 1,
    fontFamily: "Montserrat Medium 500",
    fontSize: 20,
    color: DARK_COLOR,
  },
  reviewText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 14,
    color: DARK_COLOR,
    paddingTop: 20,
    paddingHorizontal: 15,
  }
});
