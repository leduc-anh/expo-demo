import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeGreyIcon from "./navbar/home_grey.svg.js";
import FileBlueIcon from "./navbar/file_blue.svg.js";
import FileGreyIcon from "./navbar/file_grey.svg.js";
import CoinIcon from "./navbar/coin.svg.js";
import GameGreyIcon from "./navbar/game_grey.svg.js";
import UserGreyIcon from "./navbar/user_grey.svg.js";

import AllAppsScreen from "./screens/AllAppsScreen.js";
import SimpleScreen from "./screens/SimpleScreen.js";

const Tab = createBottomTabNavigator();

const Placeholder = ({ label }) => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>{label}</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#1B5EDC",
        tabBarInactiveTintColor: "#9AA0A6",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <HomeGreyIcon width={22} height={22} />,
        }}
      >
        {() => <Placeholder label="Home" />}
      </Tab.Screen>
      <Tab.Screen
        name="All Apps"
        component={AllAppsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FileBlueIcon width={26} height={26} />
            ) : (
              <FileGreyIcon width={22} height={22} />
            ),
        }}
      />
      <Tab.Screen
        name="Gold"
        options={{
          tabBarIcon: () => <CoinIcon width={22} height={22} />,
        }}
      >
        {() => <Placeholder label="Gold" />}
      </Tab.Screen>
      <Tab.Screen
        name="Game"
        options={{
          tabBarIcon: () => <GameGreyIcon width={22} height={22} />,
        }}
      >
        {() => <SimpleScreen title="Game" />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <UserGreyIcon width={22} height={22} />,
        }}
      >
        {() => <SimpleScreen title="Profile" />}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopColor: "#E9EBEF",
    borderTopWidth: 1,
    height: 64,
    paddingBottom: 8,
    paddingTop: 6,
    marginBottom: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "600",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F5F7",
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#151925",
  },
});

export default App;
