import React from "react";
import { ScrollView, SafeAreaView, View, Text } from "react-native";
import { styles } from "./Employment.styles";

const Employment = () => {
  const elements = [
    {
      number: 1,
      text: "Возможность проходить стажировки и перспективный карьерный рост",
    },
    { number: 2, text: "Различные проекты и конкретные задачи" },
    { number: 3, text: "Возможность работы в финтех компаниях" },
    { number: 4, text: "Возможность пересмотра з/п после 6 месяцев работы" },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.headerText}>
          Почему надо работать в&nbsp;
          <Text style={styles.logoText}>IISolutions</Text>?
        </Text>
        {elements.map(element => (
          <View key={element.number} style={styles.elementContainer}>
            <View style={styles.line} />
            <View style={styles.circle}>
              <Text style={styles.circleText}>{element.number}</Text>
            </View>
            <Text style={styles.elementText}>{element.text}</Text>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Employment;
