import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { gradientColors } from "../utils/constants";

export default function QuestionScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const { params: item } = useRoute();
  const navigation = useNavigation();
  const questions = item.questions;
  const title = item.title;

  const options = [
    questions[currentQuestion].correctAnswer,
    ...questions[currentQuestion].incorrectAnswers,
  ];

  const checkAnswer = (selectedOption) => {
    let correctAnswer = questions[currentQuestion]["correctAnswer"];
    console.log(correctAnswer);
    console.log(selectedOption);
    setSelectedOption(selectedOption);
    setAnswer(correctAnswer);
    if (selectedOption == correctAnswer) {
      // Set Score
      setScore(score + 20); //20 points pour chaque questions
    }
    // Show Next Button
    setShowButton(true);
  };

  const goToNext = () => {
    if (currentQuestion == questions.length - 1) {
      // Last Question , Show Score Modal
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswer(null);
      setShowButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestion + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, questions.length - 1],
    outputRange: ["0%", "100%"],
  });

  const ProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,

          backgroundColor: themeColors.bg,
        }}
        className="mt-20"
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: "white",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <View
      className="flex-1 py-8 px-4"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3 mb-3">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bg }}
          className="rounded-xl p-2"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="24" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        <Text className="font-medium text-3xl font-semibold text-center text-white">
          {title}
        </Text>

        <View className="w-3"></View>
      </SafeAreaView>
      {ProgressBar()}
      <View className="flex-1 flex-col justify-between">
        {/* Display Question */}
        <View className="mt-8 items-center mb-2">
          <View className="flex-row items-end mb-4">
            <Text className="text-white text-2xl mr-2">
              {currentQuestion + 1}
            </Text>
            <Text className="text-white text-xl">/ {questions.length}</Text>
          </View>
          <Text className="text-white text-2xl">
            {questions[currentQuestion]?.question.text}
          </Text>
        </View>

        {/* Display options */}
        <View>
          {options.map((option) => (
            <TouchableOpacity
              onPress={() => checkAnswer(option)}
              key={option}
              style={{
                borderWidth: 3,
                borderColor:
                  option == answer
                    ? themeColors.success
                    : option == selectedOption
                    ? themeColors.error
                    : themeColors.secondary + "30",
                backgroundColor:
                  option == answer
                    ? themeColors.success + "20"
                    : option == selectedOption
                    ? themeColors.error + "20"
                    : themeColors.secondary + "40",
                height: 60,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>{option}</Text>
              {option == answer ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: themeColors.success,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: "white",
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : option == selectedOption ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: themeColors.error,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="close"
                    style={{
                      color: "white",
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        {showButton ? (
          <TouchableOpacity
            className="py-3 px-3 w-72 mx-auto rounded-xl"
            onPress={goToNext}
          >
            <Text
              className="text-xl py-3 px-3  font-bold rounded-xl text-center text-white"
              style={{ backgroundColor: themeColors.secondary }}
            >
              Next
            </Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      {showScore ? (
        <Modal animationType="slide" transparent={true} visible={showScore}>
          <View className="flex-1 items-center justify-center">
            <LinearGradient
              colors={
                gradientColors[
                  Math.floor(Math.random() * gradientColors.length)
                ]
              } // Add your gradient colors
              start={{ x: 0.8, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.container}
            >
              <View>
                <Text className="text-xl font-semibold">
                  Thank You!! here is your result below
                </Text>

                <View className="flex-row content-start items-center my-6">
                  <Text className="text-2xl font-bold text-violet-700">
                    {score}
                  </Text>
                  <Text className="text-2xl font-bold text-violet-700">
                    / {questions.length * 20}
                  </Text>
                </View>
                <TouchableOpacity
                  className="py-3 px-3 w-72 mx-auto rounded-xl"
                  onPress={() => navigation.goBack()}
                >
                  <Text
                    className="text-xl py-3 px-3  font-bold rounded-xl text-center text-white"
                    style={{ backgroundColor: themeColors.bg }}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    borderRadius: 20,
    padding: 20,

    elevation: 20,

    alignItems: "center",
    margin: 10,
    overflow: "hidden",
  },
});
