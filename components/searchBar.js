import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { themeColors } from "../theme";

export default function CustomSearchBar() {
  return (
    <View
      className="max-w-sm h-14 mt-8 mx-8 mb-6 px-3 flex-row justify-between items-center border border-neutral-500 rounded-sm"
      style={{ backgroundColor: themeColors.searchBar }}
    >
      <MagnifyingGlassIcon
        size="24"
        strokeWidth={2.5}
        color={themeColors.textColor2}
      />
      <TextInput
        placeholder="Search for a subject"
        placeholderTextColor={"white"}
        className="pb-1 pl-6 flex-1 text-base font-semibold text-gray tracking-wider"
      />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="rounded-full p-3 m-1 bg-neutral-500"
      >
        <XMarkIcon size="25" color="white" />
      </TouchableOpacity> */}
    </View>
  );
}
