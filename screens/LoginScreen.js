import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function LoginScreen() {
  return (
    <View
      className="flex-1 bg-white justify-around"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex flex-col justify-center align-center space-y-6 mt-6 ">
        <Text className="font-medium text-3xl font-bold text-center text-white">
          Quizzy
        </Text>
        {/* <Image
          source={logo}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        /> */}
      </View>

      <View className="max-w-1/2 max-h-1/2 bg-white border border-gray mb-20 mx-2 my-8 px-4 pt-4 rounded-3xl shadow-2xl shadow-gray-700">
        <View className="form space-y-4">
          <Text className="text-black text-2xl font-bold text-center m-2 p-2">
            Login
          </Text>
          <View className="max-w-1/2 m-4 p-2 font-main flex-row justify-center align-center rounded-xl  bg-gray-100">
            <Icon
              className="p-2.5 mx-2 my-2"
              name="email"
              size={20}
              color="gray"
            />
            <TextInput
              placeholder="Email"
              className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
            />
          </View>

          <View className="max-w-1/2 m-4 p-2 font-main flex-row justify-center align-center rounded-xl bg-gray-100">
            <Icon className="p-2.5" name="lock" size={20} color="gray" />
            <TextInput
              placeholder="Password"
              className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity className="py-3 px-3  max-w-1/3 rounded-xl">
            <Text
              className="text-xl py-3 px-3  font-bold rounded-xl text-center text-white"
              style={{ backgroundColor: themeColors.bg }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
