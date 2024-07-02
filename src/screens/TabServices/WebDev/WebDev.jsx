import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueStarIconSvg from "../../../svg/BlueStarIcon";
import CircleIconSvg from "../../../svg/CircleIcon";
import { styles } from "./WebDev.styles";

const mistakesData = {
  mistake1: {
    heading: "Отсутствие чёткого призыва к действию",
    description:
      "Разработка веб-сайта должна начинаться с четкого понимания, что должен сделать пользователь, попадая на ваш сайт. " +
      "Используйте контент, который описывает ценность ваших продуктов или услуг, а также убедительную фразу, побуждающую к действию.",
    list: ["Добавить в корзину", "Зарегистрироваться", "Узнать больше"],
  },
  mistake2: {
    heading: "Отсутствие аналитики для измерения эффективности",
    description:
      "Встраивание инструментов отслеживания производительности достаточно быстро окупают стоимость разработки сайта. " +
      "Подключив сайт к Google Analytics, вы сможете на основе получаемой аналитики корректировать рекламные компании и настраивать " +
      "онлайн-маркетинг на аудиторию, которая принесет вам прибыль.",
  },
  mistake3: {
    heading: "Размытая информация о бренде",
    description:
      "Важно сразу же дать понять пользователям, кто вы и чем занимаетесь. Разместите на главном баннере описание " +
      "вашей услуги или товара. Меньше говорите о себе и больше говорите с аудиторией, чтобы решить их болевые точки. Это разговор, " +
      "который укрепляет доверие и ведет к увеличению продаж.",
  },
  mistake4: {
    heading: "Слабая поисковая оптимизация (SEO)",
    description:
      "Идеально оптимизированная страница веб-сайта способна увеличить трафик на 20%.",
    list: [
      "Используйте длинные ключевые фразы, вам будет легче ранжироваться.",
      "Регулярная публикация качественного контента.",
      "Поощряйте социальную активность. Добавьте кнопки социальных сетей.",
    ],
  },
};

const WebDev = () => {
  const data = [
    { heading: 'Проектирование интерфейсов', text: 'Делаем страницы удобными и понятными, подавая информацию о ' +
                                                  'ваших товарах и услугах в максимально эффективном виде. ' +
                                                  'Простота и удобство взаимодействия пользователя с сайтом – ' +
                                                  'залог того, что он не закроет вкладку, отчаявшись найти нужную ' +
                                                  'ему информацию в "простыне" плохо отформатированного текста и ' +
                                                  'необозначенных элементов навигации.' },
    { heading: 'Адаптивная вёрстка', text: 'Посетителям вашего сайта не придется "подсовывать" мобильную ' +
                                          'версию сайта, опасаясь громоздкости полноэкранных страниц. ' +
                                          'Работа с медиазапросами позволяет одинаково хорошо ' +
                                          'отображаться всему тексту, изображениям и элементам интерфейса ' +
                                          'как на компьютере или ноутбуке, так и на планшете или ' +
                                          'телефоне, независимо от разрешения и диагонали экрана устройства.' },
    { heading: 'Программирование и интеграция', text: 'Калькуляторы стоимости и фильтры по множественным параметрам ' +
                                                      'дают посетителям сайта именно то, чего они ожидают – ' +
                                                      'моментальное решение задач выбора. А интеграция платежных ' +
                                                      'систем, API сервисов и сайта несут за собой удобство расчетов ' +
                                                      'и логистическую разгрузку. Программные решения позволяют ' +
                                                      'делегировать "роботам" множество задач, тем самым разгрузить ' +
                                                      'ваш персонал, позволяя сконцентрироваться на рабочем процессе.' },
    { heading: 'Поисковая оптимизация', text: 'Для достижения лидирующих позиций Вашего сайта в органической ' +
                                              'выдаче таких поисковых систем как Яндекс и Google уже давно ' +
                                              'недостаточно закупить тонну ссылок и радоваться топовым ' +
                                              'позициям. Сейчас очень важно качество самого сайта, его ' +
                                              'правильная оптимизация под требования и условия поисковиков, а ' +
                                              'так же качество и тематика ссылающихся на него сайтов.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [currentMistakeKey, setCurrentMistakeKey] = useState(Object.keys(mistakesData)[0]);

  const handleClick = (key) => {
    setCurrentMistakeKey(key);
  };

  const handleCirclePress = (index) => {
    if (activeIndex === index) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setActiveIndex(null));
    } else {
      setActiveIndex(index);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const getHeight = () => {
    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 350],
    });
  };

  const currentMistake = mistakesData[currentMistakeKey];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.headerText}>
            4 основные ошибки при разработке сайта
          </Text>
          <View style={styles.mistakesPoints}>
            {Object.keys(mistakesData).map((key, index) => (
              <TouchableOpacity
                key={key}
                style={[styles.point, key === currentMistakeKey && styles.active]}
                onPress={() => handleClick(key)}
              >
                <Text style={styles.pointNumber}>{String(index + 1).padStart(2, '0')}</Text>
                <Text style={styles.pointText}>{mistakesData[key].heading}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.descriptionHeading}>{currentMistake.heading}</Text>
          <Text style={styles.mistakeDescription}>{currentMistake.description}</Text>
          {currentMistake.list && currentMistake.list.length > 0 && (
            <View>
              {currentMistake.list.map((item, index) => (
                <View key={index} style={styles.nestedPointWrapper}>
                  <BlueStarIconSvg style={styles.star}></BlueStarIconSvg>
                  <Text style={styles.nestedPoint}>{item}</Text>
                </View>
              ))}
            </View>
          )}
          <View style={styles.advContainer}>
            <Text style={styles.advHeading}>
              Почему работать с нами удобно и выгодно?
            </Text>
            {data.map((item, index) => (
              <View key={index}>
              <Text style={styles.advElementHeading}>{item.heading}</Text>
              <View style={styles.line}>
                <TouchableOpacity style={styles.circleWrapper} onPress={() => handleCirclePress(index)}>
                  <CircleIconSvg />
                </TouchableOpacity>
              </View>
              {activeIndex === index && (
                <Animated.View style={{ height: getHeight() }}>
                  <Text style={styles.hiddenText}>
                    {item.text}
                  </Text>
                </Animated.View>
              )}
              </View>
            ))}
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

export default WebDev;
