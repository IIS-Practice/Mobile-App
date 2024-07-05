import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SERVICES_ROUTE } from "@utils/constants";
import { useNavigation } from "@react-navigation/native";
import LeftButton from "@assets/icons/LeftButton";
import RightButton from "@assets/icons/RightButton";
import { styles } from "./ProjectsBlock.styles";
import {
  WEBDEV_SCREEN,
  BOTDEV_SCREEN,
  MOBILEDEV_SCREEN,
  UX_SCREEN,
} from "@utils/constants";

const HomeProjects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const navigation = useNavigation();

  const projects = [
    {
      name: "Разработка сайтов",
      description:
        "Создаём уникальные сайты, которые повышают конверсию продаж...",
      route: WEBDEV_SCREEN,
    },
    {
      name: "Разработка ботов",
      description:
        "Разрабатываем интеллектуальных ботов, которые автоматизируют задачи...",
      route: BOTDEV_SCREEN,
    },
    {
      name: "Разработка мобильных приложений",
      description:
        "Создаём интуитивно понятные и функциональные мобильные приложения...",
      route: MOBILEDEV_SCREEN,
    },
    {
      name: "UX/UI Дизайн",
      description:
        "Разрабатываем привлекательные и удобные интерфейсы, которые улучшают пользовательский опыт...",
      route: UX_SCREEN,
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex(prevIndex => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      prevIndex => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <View style={styles.homeProjects}>
      <View style={styles.homeBox}>
        <Text style={styles.heading}>
          Разработка проектов различной степени сложности
        </Text>
        <Text style={styles.projectText}>
          IISolutions - это профессиональный разработчик веб-сервисов, ботов и
          мобильных приложений.
        </Text>
        <View style={styles.smallProjectsWrapper}>
          <TouchableOpacity
            onPress={prevProject}
            style={[styles.navButton, styles.navButtonLeft]}>
            <LeftButton width={50} height={100} />
          </TouchableOpacity>
          {projects.map((project, index) => (
            <View
              key={index}
              style={[
                styles.projectSmall,
                index === currentProjectIndex && styles.activeProject,
              ]}>
              <View style={styles.projectContent}>
                <Text style={styles.contentName}>{project.name}</Text>
                <Text style={styles.contentDescription}>
                  {project.description}
                </Text>
                <TouchableOpacity
                  style={styles.contentButton}
                  onPress={() => navigation.navigate(project.route)}>
                  <Text style={styles.textButton}>Узнать подробнее</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={nextProject}
            style={[styles.navButton, styles.navButtonRight]}>
            <RightButton width={50} height={100} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeProjects;
