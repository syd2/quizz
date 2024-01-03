import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../theme";

export default function AppBar({ title }) {
  return (
    <View className="flex flex-row justify-between align-center space-y-6 mt-12 space-x-3 ">
      <View className="w-5"></View>
      <Text className="font-medium text-3xl font-semibold text-center text-dark">
        {title}
      </Text>
      <Pressable onPress={() => signOut(auth)}>
        <View className="flex flex-row mx-4 my-2">
          <Feather name="log-out" color={themeColors.textColor1} size={24} />
          {/* <Text className="text-xl" style={{ color: themeColors.textColor1 }}>
              Logout
            </Text> */}
        </View>
      </Pressable>
    </View>
  );
}
