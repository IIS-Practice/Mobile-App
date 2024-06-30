import React from "react";
import { ScrollView, SafeAreaView, View, Text } from "react-native";
import SimpleButton from "@components/shared/SimpleButton";
import ArrowButton from "@components/shared/ArrowButton";
import {
  EMPLOYMENT_SCREEN,
  DEVELOPERS_SCREEN,
  DESIGNERS_SCREEN,
  ANALYSTS_SCREEN,
} from "@utils/constants";
import { styles } from "./Employees.styles";

const Employees = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      <Text style={styles.text}>
        Мы гордимся своей командой и уверены в том, что она способна превзойти
        ожидания любого клиента.
      </Text>
      <SimpleButton
        title="Присоединяйтесь к нам"
        onPress={() => navigation.navigate(EMPLOYMENT_SCREEN)}
      />
      <View style={styles.buttonContainer}>
        <ArrowButton
          title="Разработчики"
          onPress={() => navigation.navigate(DEVELOPERS_SCREEN)}
        />
        <ArrowButton
          title="Дизайнеры"
          onPress={() => navigation.navigate(DESIGNERS_SCREEN)}
        />
        <ArrowButton
          title="Бизнес-аналитики"
          onPress={() => navigation.navigate(ANALYSTS_SCREEN)}
        />
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default Employees;
