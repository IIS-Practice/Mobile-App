import React from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
import { styles } from "./Waterfall.styles";

const Waterfall = () => {
  const steps = [
    { title: "Старт", number: "1", text: "Входящие требования" },
    { title: "Анализ", number: "2", text: "Разработка ТЗ" },
    {
      title: "Дизайн",
      number: "3",
      text: "Прототипирование и визуальный дизайн",
    },
    { title: "Разработка", number: "4", text: "Верстка и бэкенд" },
    { title: "Тестирование", number: "5", text: "Верстка и бэкенд" },
    { title: "Запуск", number: "6", text: "" },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.headerText}>WATERFALL</Text>
        <Text style={styles.descriptionText}>
          Традиционный способ ведения проектов. Он подойдет вам, если есть
          конкретный бюджет и сроки на реализацию проекта. Мы с вами сразу
          планируем этапы, распределяем работы, фиксируем сроки и результаты.
        </Text>

        <ScrollView horizontal={true} style={styles.waterfallContent}>
          <View style={styles.horizontalLine} />
          <View style={styles.lineContainer}>
            {steps.map((_, index) => (
              <View key={index} style={styles.line} />
            ))}
          </View>
          <View style={styles.circleContainer}>
            {steps.map((step, index) => (
              <View key={index} style={styles.circleWrapper}>
                <Text style={styles.circleTitle}>{step.title}</Text>
                <View style={styles.circle}>
                  <Text style={styles.circleNumber}>{step.number}</Text>
                </View>
                <Text style={styles.circleText}>{step.text}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Waterfall;
