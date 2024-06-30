import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { publicRoutes } from "@root/routes";
import {
  HOME_SCREEN,
  SERVICES_SCREEN,
  CASES_SCREEN,
  MORE_SCREEN,
} from "@utils/constants";
import HomeIcon from "@assets/icons/HomeIcon";
import ServicesIcon from "@assets/icons/ServicesIcon";
import CasesIcon from "@assets/icons/CasesIcon";
import MoreIcon from "@assets/icons/MoreIcon";
import LogoIcon from "@assets/icons/logo.svg";
import {
  defaultHeaderStyles,
  homeHeaderStyles,
  tabBarStyles,
} from "./AppNavigator.styles";
import { View, Text } from "react-native";

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = ({ initialRouteName }) => {
  const headerTitleComponent = title => {
    if (title === "IISolutions") {
      return (
        <View style={homeHeaderStyles.header}>
          <LogoIcon style={homeHeaderStyles.logoIcon} />
          <Text style={homeHeaderStyles.headerTitle}>{title}</Text>
        </View>
      );
    } else {
      return <Text style={defaultHeaderStyles.headerTitle}>{title}</Text>;
    }
  };

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerStyle: defaultHeaderStyles.header,
        headerTitleStyle: defaultHeaderStyles.headerTitle,
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}>
      {publicRoutes.map(({ name, Screen, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={Screen}
          options={({ route }) => ({
            headerTitle: (() => headerTitleComponent(title)) || route.name,
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

const HomeStack = () => <MainStack initialRouteName={HOME_SCREEN} />;
const ServicesStack = () => <MainStack initialRouteName={SERVICES_SCREEN} />;
const CasesStack = () => <MainStack initialRouteName={CASES_SCREEN} />;
const MoreStack = () => <MainStack initialRouteName={MORE_SCREEN} />;

const AppNavigator = () => {
  const tabs = [
    {
      name: "TabHome",
      component: HomeStack,
      label: "Главная",
      Icon: HomeIcon,
    },
    {
      name: "TabServices",
      component: ServicesStack,
      label: "Услуги",
      Icon: ServicesIcon,
    },
    {
      name: "TabCases",
      component: CasesStack,
      label: "Кейсы",
      Icon: CasesIcon,
    },
    {
      name: "TabMore",
      component: MoreStack,
      label: "Ещё",
      Icon: MoreIcon,
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TabHome"
        screenOptions={{
          tabBarStyle: tabBarStyles.tabBar,
          tabBarLabelStyle: tabBarStyles.tabBarLabel,
          tabBarActiveTintColor: tabBarStyles.tabBarIconActive.color,
          tabBarInactiveTintColor: tabBarStyles.tabBarIconInactive.color,
          headerShown: false,
        }}>
        {tabs.map(({ name, component, label, Icon }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: label,
              tabBarIcon: ({ size, focused }) => (
                <Icon
                  width={size}
                  height={size}
                  fill={
                    focused
                      ? tabBarStyles.tabBarIconActive.fill
                      : tabBarStyles.tabBarIconInactive.fill
                  }
                  stroke={
                    focused
                      ? label === "Кейсы"
                        ? tabBarStyles.tabBarCasesIconActive.stroke
                        : tabBarStyles.tabBarIconActive.stroke
                      : tabBarStyles.tabBarIconInactive.stroke
                  }
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
