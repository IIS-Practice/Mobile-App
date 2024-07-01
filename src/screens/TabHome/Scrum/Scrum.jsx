import React from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
import { styles } from "./Scrum.styles";
import SprintIcon from "@assets/icons/sprint.svg";

const Scrum = () => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      <Text style={styles.headerText}>SCRUM</Text>
      <Text style={styles.descriptionText}>
        Данный способ более гибкий и ориентирован на достижение результата. С
        вами определяем стратегию развития проекта, в короткие сроки запускаем
        его с минимальными достаточными функциями, а затем совершенствуем
        доработками согласно пользовательскому отклику по уже действующим
        функциям.
      </Text>
      <ScrollView horizontal={true} style={styles.scrumContent}>
        <View>
          <View style={styles.sprintContainer}>
            {[1, 2, 3].map(i => (
              <View key={i} style={styles.sprint}>
                <Text style={styles.sprintTitle}>Спринт {i}</Text>
                <View style={styles.wordsBlock}>
                  {["Планирование", "Оценка", "Исполнение", "Тестирование"].map(
                    (word, index) => (
                      <Text style={styles.word} key={index}>
                        {word}
                      </Text>
                    ),
                  )}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.horizontalLine}>
            <View style={styles.arrowContainer}>
              {[1, 2, 3].map((_, index) => (
                <View style={styles.arrowWrapper} key={index}>
                  <Text style={styles.arrowTitle}>Запуск</Text>
                  <SprintIcon style={styles.arrow} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </ScrollView>
);

export default Scrum;
