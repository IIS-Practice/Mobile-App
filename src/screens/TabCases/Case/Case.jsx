import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import { styles } from "./Case.styles";
import { WebView } from "react-native-webview";
import BlueStar from "@assets/icons/blue_star.svg";
import WhiteStar from "@assets/icons/white_star.svg";
import { CASES_SCREEN } from "@utils/constants";
import { getCase } from "@api/services/caseApi";

const Case = ({ navigation, route }) => {
  const caseId = route.params;
  const [_case, setCase] = useState(null);
  const [htmlBlock, setHtmlBlock] = useState(""); 

  if (!caseId) {
    return <Text>Error: caseId is missing.</Text>;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCase(caseId);
  
        if (!data) {
          navigation.navigate(CASES_SCREEN);
        } else {
          setCase({
            ...data,
            images: data.images.map(image => image.replace("https://localhost:7001", "http://10.0.2.2:5186"))
        });
          setHtmlBlock(`
              <div style="font-size: 40px; line-height: normal; font-family: "Montserrat", sans-serif;">
                  ${data.innerHtml}
              </div>
              `);
        }
      } catch (error) {
        console.error("Failed to fetch case data:", error);
        navigation.navigate(CASES_SCREEN);
      }
    };
  
    fetchData();
  }, [navigation]);


  const width = Dimensions.get("window").width * 0.9;
  const [contentHeight, setContentHeight] = useState("");

  const getWeeksBetweenDates = (start, end) => {
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);

    let diff = (endDate.getTime() - startDate.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7;

    return Math.abs(Math.round(diff));
  };

  const getWeekWord = n => {
    const remainder = n % 100;
    const lastDigit = n % 10;

    if (remainder >= 11 && remainder <= 14) {
      return `${n} недель`;
    } else {
      switch (lastDigit) {
        case 1:
          return `${n} неделю`;
        case 2:
        case 3:
        case 4:
          return `${n} недели`;
        default:
          return `${n} недель`;
      }
    }
  };

  const getEndOfService = serviceName => {
    serviceName = serviceName.toLowerCase();

    const services = {
      "разработка сайта": "разработке сайтов",
      "разработка мобильного приложения": "разработке мобильного приложения",
      "разработка ботов": "разработке ботов",
      "ux/ui Дизайн": "UX/UI дизайну",
    };

    return serviceName in services ? services[serviceName] : serviceName;
  };

  onWebViewMessage = (event) => {
    setContentHeight(Number(event.nativeEvent.data)/PixelRatio.get())
  }

  return (
    <ScrollView style={styles.container}>
      {_case ? (
      <View style={styles.content}>
        <Text style={styles.headerText}>
          Кейс{" "}
          {_case.services
            .map(service => `по ${getEndOfService(service.name)}`)
            .join(", ")}{" "}
          для "{_case.name}"
        </Text>

        <Image source={{ uri: _case.images[0] }} style={styles.image} />

        <WebView
          style={{ height: contentHeight, width: width, flex: 0, marginTop: 20,  }}
          source={{ html: htmlBlock }}
          automaticallyAdjustContentInsets={false}
          scrollEnabled={false}
          onMessage={this.onWebViewMessage}
          injectedJavaScript='window.ReactNativeWebView.postMessage(document.documentElement.clientHeight)'
        />

        <View style={styles.detailContainer}>
          <Text style={styles.detailHeader}>Разработка сайта</Text>
          <Text style={styles.detailText}>Реализация проекта заняла</Text>
          <Text style={styles.boldDetailText}>
            {getWeekWord(getWeeksBetweenDates(_case.startDate, _case.endDate))}
          </Text>

          <Text style={styles.detailText}>Сложность проекта</Text>

          <View style={styles.starContainer}>
            {[...Array(5)].map((_, i) =>
              i >= _case.complexity ? (
                <WhiteStar key={i} style={styles.starImage} />
              ) : (
                <BlueStar key={i} style={styles.starImage} />
              ),
            )}
          </View>

          <Text style={styles.costContainer}>
            <Text style={styles.detailText}>Стоимость проекта{`\t\t\t\t`}</Text>
            <Text style={styles.boldDetailText}>{_case.cost}$</Text>
          </Text>
        </View>
      </View>) : <Text>Wait...</Text>}
    </ScrollView>
  );
};

export default Case;
