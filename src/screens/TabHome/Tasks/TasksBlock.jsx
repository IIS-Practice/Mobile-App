import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SCRUM_SCREEN, WATERFALL_SCREEN } from "@utils/constants";
import StarIcon from "@assets/icons/StarIcon";
import { styles } from "./TasksBlock.styles";

const HomeTasks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeTasks}>
      <Text style={styles.title}>Работаем по подходящей для Вас методологии</Text>
      <View>
        <View style={styles.task}>
          <Text style={styles.taskTitle}>WATERFALL</Text>
          <View style={styles.aboutTask}>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>полное ТЗ</Text>
            </View>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>запуск от 3х месяцев</Text>
            </View>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>фиксированная цена</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(WATERFALL_SCREEN)} style={styles.buttonAbout}>
            <Text style={styles.buttonAboutText}>Подробнее</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskTitle}>SCRUM</Text>
          <View style={styles.aboutTask}>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>дорожная карта</Text>
            </View>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>оплата по факту затраченных часов</Text>
            </View>
            <View style={styles.taskItem}>
              <StarIcon />
              <Text style={styles.taskItemText}>гибкая цена +/-</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(SCRUM_SCREEN)} style={styles.buttonAbout}>
            <Text style={styles.buttonAboutText}>Подробнее</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeTasks;
