import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
} from "@utils/colors";

export const defaultHeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: LIGHT_COLOR,
    height: 40,
    elevation: 5,
  },
  headerTitle: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 20,
    color: DARK_COLOR,
  },
  backIcon: {
    width: 24,
    height: 24,
    fill: DARK_COLOR,
  },
});

export const homeHeaderStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    shadowColor: DARK_COLOR,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  headerTitle: {
    fontFamily: "NotoSerifGujarati Medium 500",
    fontSize: 20,
    color: SECONDARY_COLOR,
    marginLeft: 3,
  },
  logoIcon: {
    width: 34,
    height: 34,
  },
});

export const tabBarStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: LIGHT_COLOR,
    borderTopWidth: 0,
    height: 60,
    boxSizing: "border-box",
    shadowColor: DARK_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingBottom: "3%",
    paddingTop: "1%",
  },
  tabBarLabel: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 10,
  },
  tabBarIconActive: {
    fill: PRIMARY_COLOR,
    stroke: PRIMARY_COLOR,
    color: PRIMARY_COLOR,
  },
  tabBarCasesIconActive: {
    stroke: LIGHT_COLOR,
  },
  tabBarIconInactive: {
    fill: LIGHT_COLOR,
    stroke: TERTIARY_COLOR,
    color: TERTIARY_COLOR,
  },
});
