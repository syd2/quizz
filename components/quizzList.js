import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import { gradientColors } from "../utils/constants";

export default function QuizzList({ title, quizzTitles }) {
  const images = {};
  quizzTitles.forEach((item) => {
    const firstWord = item.split(" ")[0].toLowerCase();
    const imageName = `${firstWord}`;
    images[item] = imageName;
  });
  const navigation = useNavigation();
  return (
    <View className="space-y-4 mt-20 mx-2 my-8 ">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-black mr-2 text-xl font-bold tracking-tight capitalize">
          {title}
        </Text>

        {
          //   <TouchableOpacity>
          //     <Text style={themeColors.textColor1} className="text-lg">
          //       See All
          //     </Text>
          //   </TouchableOpacity>
        }
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {quizzTitles.map((item, index) => {
          const image = images[item];
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() =>
                navigation.push("Quizz", { item: item, image: image })
              }
            >
              <View className="space-y-1 mr-4">
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
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("Quizz", { item: item, image: image })
                    }
                  >
                    <Text className="mb-2 text-white text-xl font-semibold tracking-tight">
                      {item.length > 14 ? item.slice(0, 14) + "..." : item}
                    </Text>
                  </TouchableOpacity>
                  <Text className="mb-3 mt-2 font-normal text-white">
                    10 questions
                  </Text>
                </LinearGradient>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 137,
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    margin: 10,
    overflow: "hidden",
  },
});
