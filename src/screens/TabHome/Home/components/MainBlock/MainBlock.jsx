import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CompanyImage from "@assets/icons/CompanyImage.png";
import { styles } from "./MainBlock.styles";
import { FORM_SCREEN } from "@utils/constants";

const HomeMainBlock = ({ navigation }) => {
  return (
    <View style={styles.mainBlock}>
      <View style={styles.companyName}>
        <View style={styles.textContainer}>
          <Text style={styles.heading1}>IISolutions -</Text>
          <Text style={styles.heading2}>ваши идеи, наше</Text>
          <Text style={styles.heading2}>воплощение</Text>

          <TouchableOpacity
            style={styles.submitApplication}
            onPress={() => navigation.navigate(FORM_SCREEN)}>
            <Text style={styles.submitApplicationText}>Оставить заявку</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.companyImage}>
        <Image source={CompanyImage} style={styles.image} />
      </View>
    </View>
  );
};

export default HomeMainBlock;
