import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ArrowButton.styles";
import ArrowIcon from "@assets/icons/arrow.svg";

const ArrowButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    <ArrowIcon style={styles.arrowIcon} />
  </TouchableOpacity>
);

export default ArrowButton;
