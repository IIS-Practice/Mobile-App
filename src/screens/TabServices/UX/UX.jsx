import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WhiteStarIconSvg from "@assets/icons/WhiteStarIcon";
import BlueStarIconSvg from "@assets/icons/BlueStarIcon";
import { styles } from "./UX.styles";

const UX = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.headerText}><Text style={styles.designWord}>Дизайн </Text>интерфейсов любой сложности</Text>
          <Text style={styles.text}>
          {`Мы построим правильную логику\nвзаимодействия пользователя с\nсайтом или приложением, которая
приведёт к увеличению\nконверсии, продвижению товаров\nи улучшением обслуживания\nклиентов.`}
          </Text>
          <View style={styles.exampleContainers}>
            <View style={styles.example}><Text style={styles.exampleText}>Сайты</Text></View>
            <View style={styles.example}><Text style={styles.exampleText}>Веб-приложения</Text></View>
            <View style={styles.example}><Text style={styles.exampleText}>Мобильные приложения</Text></View>
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.text}>
            {`Подбираем на проект дизайнера\nс сильными скиллами в нужной\nобласти и усиливаем другими\nспециалистами: 2D- и 3D-
иллюстраторами.`}</Text>
            <Text style={styles.text}>
            {`Отвечаем в течение дня, простые\nпроекты оцениваем за два,\nподписываем документы и\nначинаем работу.`}
            </Text>
            <Text style={styles.text}>
              {`Быстро вникаем в проект и не\nтратим деньги клиентов на\nпрототипы для простых сервисов\nи в отраслях, где собаку съели.`}
            </Text>
          </View>
          <View style={styles.anotherContainer}>
            <Text style={styles.anotherContainerHeading}>{`Прозрачность процесса и синхронизация\nс бизнесом`}</Text>
            <Text style={styles.anotherContainerText}>{`Сверяемся с клиентом на каждом\nэтапе, а не молчим несколько\nмесяцев, пока не сделаем
идеально. После обратной связи\nобсуждаем варианты решения и\nдвигаемся дальше. Спустя одну-\nдве-три итерации макет
превращается в финальный\nдизайн.`}</Text>
            <View style={styles.anotherContainerPoints}>
              <View style={styles.pointWrapper}>
                <WhiteStarIconSvg></WhiteStarIconSvg>
                <Text style={styles.anotherContainerPointsText}>Все видно в Фигме</Text>
              </View>
              <View style={styles.pointWrapper}>
                <WhiteStarIconSvg></WhiteStarIconSvg>
                <Text style={styles.anotherContainerPointsText}>Арт-директинг</Text>
              </View>
              <View style={styles.pointWrapper}>
                <WhiteStarIconSvg></WhiteStarIconSvg>
                <Text style={styles.anotherContainerPointsText}>Scrum, Lean, Agile</Text>
              </View>
              <View style={styles.pointWrapper}>
                <WhiteStarIconSvg></WhiteStarIconSvg>
                <Text style={styles.anotherContainerPointsText}>Дейли, еженедельные отчеты</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceHeading}>ПРАЙС</Text>
            <Text style={styles.priceHeading}>от 1000 $</Text>
            <View style={styles.pricePoints}>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Составление ТЗ</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Прототип</Text>
              </View>
              <View style={styles.nestedPointWrapper}>
                <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                <Text style={styles.pricePoint}>Дизайн интерфейса</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default UX;
