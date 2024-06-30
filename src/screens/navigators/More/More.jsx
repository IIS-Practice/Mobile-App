import React from "react";
import { ScrollView, View } from "react-native";
import ArrowButton from "@components/shared/ArrowButton";
import { styles } from "./More.styles";
import {
  CONTACTS_SCREEN,
  EMPLOYEES_SCREEN,
  EMPLOYMENT_SCREEN,
  REVIEWS_SCREEN,
  FAQ_SCREEN,
} from "@utils/constants";

const More = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.buttonContainer}>
      <ArrowButton
        title="Контакты"
        onPress={() => navigation.navigate(CONTACTS_SCREEN)}
      />
      <ArrowButton
        title="Сотрудники"
        onPress={() => navigation.navigate(EMPLOYEES_SCREEN)}
      />
      <ArrowButton
        title="Трудоустройство"
        onPress={() => navigation.navigate(EMPLOYMENT_SCREEN)}
      />
      <ArrowButton
        title="Отзывы"
        onPress={() => navigation.navigate(REVIEWS_SCREEN)}
      />
      <ArrowButton
        title="FAQ"
        onPress={() => navigation.navigate(FAQ_SCREEN)}
      />
    </View>
  </ScrollView>
);

export default More;
