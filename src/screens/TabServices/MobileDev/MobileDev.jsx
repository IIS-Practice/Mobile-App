import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueStarIconSvg from "@assets/icons/BlueStarIcon";
import { styles } from "./MobileDev.styles";

const stagesData = {
  stage1: {
    heading: "Анализ и планирование",
    description:
      "На этапе анализа и планирования мы собираем и документируем все требования к приложению, определяем функциональные " +
      "и нефункциональные требования, создаем спецификации и технические задания. Это нужно, чтобы убедиться, что все аспекты " +
      "приложения продуманы до мелочей и учтены в проекте.",
  },
  stage2: {
    heading: "Дизайн",
    description:
      "Наши дизайнеры создают визуальный стиль приложения, включая выбор цветов, шрифтов и элементов интерфейса. " +
      "Мы разрабатываем  интерфейс, который улучшит взаимодействие пользователей с вашим приложением. Мы проектируем пользовательский " +
      "опыт, разрабатывая удобную и интуитивно понятную навигацию и взаимодействия. Мы проводим тестирование прототипов с " +
      "реальными пользователями, чтобы убедиться, что приложение удобно в использовании.",
  },
  stage3: {
    heading: "Разработка",
    description:
      "Мы используем современные технологии и фреймворки, чтобы обеспечить высокое качество и производительность " +
      "приложения. Наши backend-разработчики обеспечивают надежную и безопасную работу серверной части, разрабатывают логику " +
      "обработки данных и интеграцию с внешними сервисами.",
  },
  stage4: {
    heading: "Тестирование",
    description:
      "На этапе функционального тестирования мы проверяем работу всех функций и модулей приложения, чтобы убедиться, " +
      "что они работают правильно и без ошибок. Это помогает нам выявить проблемы, которые могут возникнуть при реальном " +
      "использовании, и внести необходимые изменения перед запуском.",
  },
  stage5: {
    heading: "Запуск",
    description:
      "Перед запуском мы оформляем все необходимые материалы для публикации. Затем мы размещаем ваше приложение в " +
      "магазинах приложений App Store и Google Play. Мы следим за процессом публикации и обеспечиваем соответствие всех требований " +
      "платформ, чтобы ваше приложение прошло модерацию и стало доступным пользователям.",
  },
  stage6: {
    heading: "Поддержка и обновление",
    description:
      "После публикации приложения мы начинаем тщательно отслеживать его работу с помощью инструментов аналитики. " +
      "Это позволяет нам получать данные о пользовательской активности, производительности приложения и его стабильности.",
  },
};

const MobileDev = () => {
  const [currentStageKey, setCurrentStageKey] = useState(
    Object.keys(stagesData)[0],
  );

  const handleClick = key => {
    setCurrentStageKey(key);
  };

  const currentStage = stagesData[currentStageKey];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.headerText}>
            iOS и Android приложения, отвечающие всем требованиям
          </Text>
          <View style={styles.stagesContainer}>
            <Text style={styles.stagesContainerHeading}>
              Этапы разработки приложения
            </Text>
            <View style={styles.stagesPoints}>
              {Object.keys(stagesData).map((key, index) => (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.point,
                    key === currentStageKey && styles.active,
                  ]}
                  onPress={() => handleClick(key)}>
                  <Text style={styles.pointNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Text style={styles.pointText}>
                    {stagesData[key].heading}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.descriptionHeading}>
              {currentStage.heading}
            </Text>
            <Text style={styles.stageDescription}>
              {currentStage.description}
            </Text>
            {currentStage.list && currentStage.list.length > 0 && (
              <View>
                {currentStage.list.map((item, index) => (
                  <View key={index} style={styles.nestedPointWrapper}>
                    <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                    <Text style={styles.nestedPoint}>{item}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceHeading}>ПРАЙС</Text>
            <Text style={styles.priceHeading}>от 1000 $</Text>
            <View style={styles.points}>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Составление ТЗ</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Дизайн интерфейса</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Техническая разработка</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Тестирование</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MobileDev;
