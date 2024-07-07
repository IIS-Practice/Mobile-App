import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, Image, Text } from "react-native";
import SimpleButton from "@components/shared/SimpleButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Developers.styles";

const Developers = ({ navigation }) => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('specialists');
        if (cachedData) {
          const specialists = JSON.parse(cachedData);
          const filteredDevelopers = specialists.filter(
            (specialist) => specialist.position === "Разработчик"
          );
          setDevelopers(filteredDevelopers);
        }
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      }
    };
    fetchDevelopers();
  }, []);

  return (

  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
    {developers.map((developer, index) => (
    <View key={index} style={styles.WorkerInfo}>
        <Image 
          source={{ uri: developer.imageUrl }} 
          style={styles.image} 
        />
        <Text style={styles.info}>
          {developer.surname} {developer.name}
        </Text>
        <Text style={styles.stack}>
          {developer.description}
        </Text>
        <SimpleButton 
        title="Посмотреть резюме"
        onPress={() => navigation.navigate(developer.cvUri)}
        />
      </View> 
      ))}
    </SafeAreaView>
  </ScrollView>
);
};

export default Developers;
