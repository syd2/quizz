import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { lastQuizzes, popularQuizzes } from "../api/data";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import QuizzList from "../components/quizzList";
import AppBar from "../components/appBar";
import CustomSearchBar from "../components/searchBar";

export default function HomeScreen() {
  const [lastQuizz, setLastQuizz] = useState([]);

  const [popularQuizz, setPopularQuizz] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getLastQuizzes();
    getPopularQuizzes();
  }, []);

  const getLastQuizzes = async () => {
    const response = await lastQuizzes();
    const data = Object.keys(response); //get the quizzes titles
    setLastQuizz(data);
  };

  const getPopularQuizzes = async () => {
    const response = await popularQuizzes();
    const data = Object.keys(response); //get the quizzes titles
    setPopularQuizz(data);
  };

  return (
    <View className="flex-1 mt-3">
      <AppBar title="Home" />

      <CustomSearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {lastQuizz.length > 0 && (
          <QuizzList title="last quizzes" quizzTitles={lastQuizz} />
        )}

        {popularQuizz.length > 0 && (
          <QuizzList title="popular quizzes" quizzTitles={popularQuizz} />
        )}
      </ScrollView>
    </View>
  );
}
