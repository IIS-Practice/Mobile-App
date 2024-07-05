import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./Home.styles";
import { HomeMainBlock, HomeProjects, HomeTasks } from "./components";

const Home = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <HomeMainBlock navigation={navigation} />
    <HomeProjects />
    <HomeTasks />
  </ScrollView>
);

export default Home;
