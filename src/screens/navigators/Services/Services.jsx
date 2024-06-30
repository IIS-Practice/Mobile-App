import React from "react";
import { ScrollView, SafeAreaView, View, Text } from "react-native";
import SimpleButton from "@components/shared/SimpleButton";
import { styles } from "./Services.styles";
import {
  WEBDEV_SCREEN,
  MOBILEDEV_SCREEN,
  BOTDEV_SCREEN,
  UX_SCREEN,
} from "@utils/constants";

const Services = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      <Text style={styles.headerText}>Выберите сервис</Text>
      <View style={styles.buttonContainer}>
        <SimpleButton
          title="Разработка сайта"
          onPress={() => navigation.navigate(WEBDEV_SCREEN)}
        />
        <SimpleButton
          title="Разработка мобильного приложения"
          onPress={() => navigation.navigate(MOBILEDEV_SCREEN)}
        />
        <SimpleButton
          title="Разработка ботов"
          onPress={() => navigation.navigate(BOTDEV_SCREEN)}
        />
        <SimpleButton
          title="UX/UI Дизайн"
          onPress={() => navigation.navigate(UX_SCREEN)}
        />
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default Services;
