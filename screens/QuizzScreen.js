import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Feather } from "@expo/vector-icons";
import CustomSearchBar from "../components/searchBar";
import AppBar from "../components/appBar";
import { themeColors } from "../theme";
import { getQuizzes } from "../api/data";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import QuizzList from "../components/quizzList";

export default function QuizzScreen() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getAllQuizzes();
  }, []);
  const getAllQuizzes = async () => {
    const response = await getQuizzes();
    const data = Object.keys(response); //get the quizzes titles
    console.log("got quizzes", data);
    if (data) setQuizzes(data);
  };
  return (
    <View className="flex-1 mt-3 ">
      <AppBar title="Quizzes" />
      <CustomSearchBar />
      <FlatList
        data={quizzes}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <QuizzList data={[item]} quizzTitles={quizzes} title="Quizzes" />
        )}
        contentContainerStyle={{ paddingBottom: 5 }}
      />
    </View>
  );
}
