import React from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { FORM_SCREEN, WATERFALL_SCREEN, SCRUM_SCREEN } from "@utils/constants";
import { styles } from "./Home.styles";
import SimpleButton from "@components/shared/SimpleButton";

const Home = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <SafeAreaView style={styles.content}>
      <View style={styles.buttonContainer}>
        <SimpleButton
          title="Форма"
          onPress={() => navigation.navigate(FORM_SCREEN)}
        />
        <SimpleButton
          title="Waterfall"
          onPress={() => navigation.navigate(WATERFALL_SCREEN)}
        />
        <SimpleButton
          title="Scrum"
          onPress={() => navigation.navigate(SCRUM_SCREEN)}
        />
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default Home;
