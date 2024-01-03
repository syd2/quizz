import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import QuizzScreen from "../screens/QuizzScreen";
import SingleQuizz from "../screens/SingleQuizz";
import useAuth from "../hooks/useAuth";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { themeColors } from "../theme";
import QuestionScreen from "../screens/questionScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={themeColors.textColor1}
      barStyle={{
        backgroundColor: "white",
        borderRadius: 40,
        elevation: 30,
        boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)",
        height: 60,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Quizzes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Quizz"
        component={QuizzScreen}
        options={{
          tabBarLabel: "Quizzes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="HomeBar"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />

          <Stack.Screen
            name="Quizz"
            options={{ headerShown: false }}
            component={SingleQuizz}
          />

          <Stack.Screen
            name="Questions"
            options={{ headerShown: false }}
            component={QuestionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
