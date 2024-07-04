import React from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { FORM_SCREEN, WATERFALL_SCREEN, SCRUM_SCREEN } from "@utils/constants";
import { styles } from "./Home.styles";
import SimpleButton from "@components/shared/SimpleButton";
import HomeMainBlock from "../MainBlock/MainBlock";
import HomeProjects from "../Projects/ProjectsBlock";
import HomeTasks from "../Tasks/TasksBlock";

const Home = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <HomeMainBlock navigation={navigation}/>
    <HomeProjects/>
    <HomeTasks/>
    </ScrollView>
); 

export default Home;
