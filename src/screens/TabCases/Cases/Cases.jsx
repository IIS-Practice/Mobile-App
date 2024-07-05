import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { CASE_SCREEN } from "@utils/constants";
import { getCases } from "@api/services/caseApi";

import { styles } from "./Cases.styles";

const Cases = ({ navigation }) => {
  const moreClick = () => {
    if (visibleCount + 3 > cases.length) setVisibleCount(cases.length);
    else setVisibleCount(visibleCount + 3);
  };

  const casePress = id => {
    navigation.navigate(CASE_SCREEN, id);
  };

  const _cases = [
    {
      id: "1",
      name: "PITA STREET FOOD",
      shortDescription:
        "Разработка сайта для корректного отображения на всех устройствах!",
      images: [
        "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/21nidwfy.png",
      ],
    },
    {
      id: "2",
      name: "PITA STREET FOOD",
      shortDescription:
        "Разработка сайта для корректного отображения на всех устройствах!",
      images: [
        "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/a0nhh1d3.jpg",
      ],
    },
    {
      id: "3",
      name: "PITA STREET FOOD",
      shortDescription:
        "Разработка сайта для корректного отображения на всех устройствах!",
      images: [
        "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/a0nhh1d3.jpg",
      ],
    },
    {
      id: "4",
      name: "PITA STREET FOOD",
      shortDescription:
        "Разработка сайта для корректного отображения на всех устройствах!",
      images: [
        "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/a0nhh1d3.jpg",
      ],
    },
    {
      id: "5",
      name: "PITA STREET FOOD",
      shortDescription:
        "Разработка сайта для корректного отображения на всех устройствах!",
      images: [
        "http://10.0.2.2:5186/Images/Cases/36f010ed-8c38-4eeb-b9ec-5fb56ccf3189/a0nhh1d3.jpg",
      ],
    },
  ];
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCases();
        setCases(data.map(item => {
          return {
              ...item,
              images: item.images.map(image => image.replace("https://localhost:7001", "http://10.0.2.2:5186"))
          };
      }));
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
    };

    fetchCases();
    console.log(cases);
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {cases.slice(0, visibleCount).map(_case => (
          <TouchableOpacity
            style={styles.caseBlock}
            onPress={() => casePress(_case.id)}
            key={_case.id}
            activeOpacity={0.8}>
            <ImageBackground
              source={{ uri: _case.images[0] }}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.titleText}>{_case.name}</Text>
              <Text style={styles.descriptionText}>
                {_case.shortDescription}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.moreButton,
            visibleCount === cases.length
              ? styles.moreButtonDisable
              : styles.moreButtonEnable,
          ]}
          disabled={visibleCount === cases.length}
          onPress={moreClick}>
          <Text
            style={[
              styles.moreText,
              visibleCount === cases.length
                ? styles.moreTextDisable
                : styles.moreTextEnable,
            ]}>
            Показать ещё
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cases;
