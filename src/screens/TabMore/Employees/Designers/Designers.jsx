import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, Image, Text } from "react-native";
import SimpleButton from "@components/shared/SimpleButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Designers.styles";

const Designers = ({ navigation }) => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('specialists');
        if (cachedData) {
          const specialists = JSON.parse(cachedData);
          const filteredDesigners = specialists.filter(
            (specialist) => specialist.position === "Дизайнер"
          );
          setDesigners(filteredDesigners);
        }
      } catch (error) {
        console.error("Failed to fetch designers:", error);
      }
    };
    fetchDesigners();
  }, []);

  return (

  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      {designers.map((designer, index) => (
      <View key={index} style={styles.WorkerInfo}>
        <Image 
          source={{ uri: designer.imageUrl }}
          style={styles.image} 
        />
        <Text style={styles.info}>
          {designer.surname} {designer.name}
        </Text>
        <Text style={styles.stack}>
          {designer.description}
        </Text>
        <SimpleButton 
        title="Посмотреть резюме"
        onPress={() => navigation.navigate(designer.cvUri)}
        />
      </View> 
      ))}
    </SafeAreaView>
  </ScrollView>
);
};

export default Designers;
