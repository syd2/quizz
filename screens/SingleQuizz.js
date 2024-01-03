import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Feather } from "@expo/vector-icons";
import { quizzImages, themeColors } from "../theme";
import AppBar from "../components/appBar";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { getQuestions } from "../api/data";

export default function SingleQuizz(title) {
  const navigation = useNavigation();
  const { params: item } = useRoute();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState({});
  var { width, height } = Dimensions.get("window");

  const image = quizzImages[item.image];

  useEffect(() => {
    quizzQuestions();
  }, []);

  const quizzQuestions = async () => {
    const subject = item.item.split(" ")[0].toLowerCase();
    const response = await getQuestions(subject);
    const data = response;
    console.log("questionsss :  ", data);
    setQuestions(data);
  };

  return (
    <View className="flex-1 mt-3">
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bg }}
          className="rounded-xl p-2"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="24" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        {/* <Text className="font-medium text-3xl font-semibold text-center text-dark">
          {item.item}
        </Text> */}

        <View className="w-5"></View>
      </SafeAreaView>
      {/* {loading ? (
          <Loading />
        ) : ( */}
      <View>
        <Image source={image} style={{ width, height }} />

        <LinearGradient
          colors={[
            "transparent",
            "rgba(23, 23, 23, 0.8)",
            "rgba(23, 23, 23, 1)",
          ]}
          style={{ width, height: height * 0.4 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
      </View>

      <View
        style={{ marginTop: -(height * 0.8) }}
        className="space-y-3 flex flex-col justify-between"
      >
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold mb-6 tracking-widest">
          {item.item}
        </Text>
        <Text className="text-white text-2xl mx-4  font-semibold tracking-wide mb-48">
          10 questions about {item.item} and each good answer earns you 20
          points
        </Text>

        <TouchableOpacity
          className="py-3 px-3 w-72 mx-auto rounded-xl"
          onPress={() =>
            navigation.push("Questions", {
              questions: questions,
              title: item.item,
            })
          }
        >
          <Text
            className="text-xl py-3 px-3  font-bold rounded-xl text-center text-white"
            style={{ backgroundColor: themeColors.bg }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
