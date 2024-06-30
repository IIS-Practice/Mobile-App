import { StyleSheet } from "react-native";
import { LIGHT_COLOR, ERROR_COLOR, SECONDARY_COLOR } from "@utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontFamily: "Montserrat Regular 400",
    fontSize: 16,
  },
  inputError: {
    borderColor: ERROR_COLOR,
  },
  textArea: {
    height: 115,
    fontFamily: "Montserrat Regular 400",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 2,
  },
  buttonContainer: {
    marginTop: 30,
    position: "relative",
    width: "100%",
  },
  errorMessage: {
    position: "absolute",
    top: -25,
    left: 0,
    right: 0,
    textAlign: "center",
    color: ERROR_COLOR,
    fontFamily: "Montserrat Regular 400",
    fontSize: 14,
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: "center",
    height: 40,
    width: "100%",
    paddingVertical: "2.5%",
  },
  buttonDisabled: {
    opacity: 0.75,
  },
  buttonText: {
    fontFamily: "Montserrat Regular 400",
    fontSize: 14,
    color: LIGHT_COLOR,
  },
  footerText: {
    marginTop: 15,
    textAlign: "left",
    fontFamily: "Montserrat Regular 400",
    fontSize: 12,
    width: "100%",
  },
});
