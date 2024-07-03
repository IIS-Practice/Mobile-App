import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueStarIconSvg from "../../../assets/icons/BlueStarIcon";
import { styles } from "./BotDev.styles";

const stagesData = {
  stage1: {
    heading: "Анализ потребностей",
    description:
      "Мы начинаем с детального анализа ваших бизнес-процессов и задач, которые могут быть автоматизированы. Наши " +
      "специалисты проводят интервью с ключевыми стейкхолдерами и изучают текущие рабочие процессы, чтобы выявить области, где " +
      "боты могут значительно повысить эффективность и снизить затраты.",
  },
  stage2: {
    heading: "Проектирование и разработка",
    description:
      "Наши эксперты разрабатывают ботов, используя передовые технологии и лучшие практики. Мы создаем интеллектуальные " +
      "алгоритмы, которые обеспечивают высокую производительность и точность работы ботов.  На этом этапе мы создаем прототипы и " +
      "макеты, чтобы вы могли увидеть, как будет работать ваш бот. Мы также учитываем все аспекты безопасности данных и конфиденциальности.",
  },
  stage3: {
    heading: "Интеграция",
    description:
      "Мы интегрируем ботов в вашу существующую систему, обеспечивая  совместимость с другими инструментами и платформами. " +
      "Наши инженеры работают в тесном сотрудничестве с вашей IT-командой, чтобы обеспечить бесшовное подключение и " +
      "взаимодействие с уже используемыми системами.",
  },
  stage4: {
    heading: "Тестирование и оптимизация",
    description:
      "Каждого бота мы тщательно тестируем, чтобы гарантировать его надежность и эффективность. Мы проводим " +
      "многоуровневое тестирование, включая функциональное, нагрузочное и пользовательское тестирование, чтобы убедиться, что " +
      "бот работает без сбоев в любых условиях. После запуска мы продолжаем мониторинг и оптимизацию работы бота, чтобы он всегда " +
      "оставался актуальным и эффективным. Мы собираем данные о его производительности и вносим необходимые корректировки " +
      "для улучшения его работы.",
  },
  stage5: {
    heading: "Поддержка и обновления",
    description:
      "Мы предоставляем постоянную поддержку и обновления для наших решений, чтобы ваши боты всегда работали " +
      "на высшем уровне и соответствовали изменяющимся требованиям бизнеса. Наша команда поддержки всегда готова помочь вам " +
      "с любыми вопросами или проблемами.",
  },
};

const BotDev = () => {
  const [currentStageKey, setCurrentStageKey] = useState(Object.keys(stagesData)[0]);

  const handleClick = (key) => {
    setCurrentStageKey(key);
  };

  const currentStage = stagesData[currentStageKey];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}> 
          <Text style={styles.headerText}>
            Улучшение бизнес-процессов
          </Text>
          <View style={styles.points}>
            <View style={styles.nestedPointWrapper}>
              <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
              <Text style={styles.text}>Уменьшение нагрузки на персонал</Text>
            </View>
            <View style={styles.nestedPointWrapper}>
              <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
              <Text style={styles.text}>Автоматизация рутинных и повторяющихся задач</Text>
            </View>
            <View style={styles.nestedPointWrapper}>
              <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
              <Text style={styles.text}>Повышение эффективности</Text>
            </View>
            <View style={styles.nestedPointWrapper}>
              <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
              <Text style={styles.text}>Увеличение доверия клиентов к бренду</Text>
            </View>
          </View>
          <View style={styles.stagesContainer}>
            <Text style={styles.stagesContainerHeading}>Как мы это делаем?</Text>
            <View style={styles.stagesPoints}>
              {Object.keys(stagesData).map((key, index) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.point, key === currentStageKey && styles.active]}
                  onPress={() => handleClick(key)}
                >
                  <Text style={styles.pointNumber}>{String(index + 1).padStart(2, '0')}</Text>
                  <Text style={styles.pointText}>{stagesData[key].heading}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.descriptionHeading}>{currentStage.heading}</Text>
            <Text style={styles.stageDescription}>{currentStage.description}</Text>
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
                <Text style={styles.pricePoint}>Разработка</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Интеграция</Text>
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

export default BotDev;
