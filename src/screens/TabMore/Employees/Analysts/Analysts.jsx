import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View, Image, Text } from "react-native";
import SimpleButton from "@components/shared/SimpleButton";
import { styles } from "./Analysts.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Analysts = ({ navigation }) => {
  const [analysts, setAnalysts] = useState([]);
   
  useEffect(() => {
    const fetchAnalysts = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('specialists');
        if (cachedData) {
          const specialists = JSON.parse(cachedData);
          const filteredAnalysts = specialists.filter(
            (specialist) => specialist.position === "Аналитик"
          );
          setAnalysts(filteredAnalysts);
        }
      } catch (error) {
        console.error("Failed to fetch analysts:", error);
      }
    };
    fetchAnalysts();
  }, []);

  
  return (

  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
    {analysts.map((analyst, index) => (
      <View key={index} style={styles.WorkerInfo}>
        <Image 
          source={analyst.imageUrl} 
          style={styles.image} 
        />
        <Text style={styles.info}>
          {analyst.surname} {analyst.name}
        </Text>
        <Text style={styles.stack}>
          {analyst.description}
        </Text>
        <SimpleButton 
        title="Посмотреть резюме"
        onPress={() => navigation.navigate(analyst.cvUri)}
        />
      </View> 
      ))}
    </SafeAreaView>
  </ScrollView>
);
};

export default Analysts;
