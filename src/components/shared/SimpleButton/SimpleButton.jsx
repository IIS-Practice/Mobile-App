import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./SimpleButton.styles";

const SimpleButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={1}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default SimpleButton;
