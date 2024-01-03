import { useAuth } from "../hooks/useAuth";
import { signOut, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import AppBar from "../components/appBar";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const submitFields = async () => {
    // Your logic to update user profile (username, password, and profile picture)
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirm_password);
    console.log("Profile Image:", profileImage);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("image : ", result.uri);
      setProfileImage(result.uri);
      console.log("image : ", profileImage);
    }
  };
  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <ScrollView
        className="space-y-6 mt-12 space-x-3 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* <View
          className="flex-1 bg-white justify-around"
          style={{ backgroundColor: themeColors.bg }}
        > */}
        <TouchableWithoutFeedback onPress={pickImage}>
          <View className="items-center mt-8 mb-4">
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 40,
                  marginBottom: 10,
                }}
              />
            ) : (
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  backgroundColor: "lightgray",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Icon name="account" size={60} color="gray" />
              </View>
            )}
            <Text className="text-white text-sm ">
              {profileImage ? "Change Picture" : "Add Picture"}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View className="max-w-1/2 max-h-1/2 bg-white border border-gray mb-20 mx-2 my-8 px-4 pt-4 rounded-3xl shadow-2xl shadow-gray-700">
          <View className="form space-y-4">
            <View className="max-w-1/2 m-4 p-4 font-main flex-row items-center rounded-xl bg-gray-100">
              <Icon
                className="p-2.5 mx-2"
                name="account"
                size={20}
                color="gray"
              />
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(value) => setUsername(value)}
                className="ml-4"
                style={{
                  flex: 1,
                  paddingTop: 6,
                  fontSize: 16,
                  paddingRight: 6,
                  paddingBottom: 6,
                  paddingLeft: 0,
                }}
              />
            </View>

            <View className="max-w-1/2 m-4 p-2 font-main flex-row items-center rounded-xl bg-gray-100">
              <Icon className="p-2.5 mx-2" name="lock" size={20} color="gray" />
              <TextInput
                placeholder="New Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
                className="ml-4"
                style={{
                  flex: 1,
                  paddingTop: 6,
                  fontSize: 16,
                  paddingRight: 6,
                  paddingBottom: 6,
                  paddingLeft: 0,
                }}
                secureTextEntry={true}
              />
            </View>

            <View className="max-w-1/2 m-4 p-2 font-main flex-row items-center rounded-xl bg-gray-100">
              <Icon className="p-2.5 mx-2" name="lock" size={20} color="gray" />
              <TextInput
                placeholder="Confirm New Password"
                value={confirm_password}
                onChangeText={(value) => setConfirmPassword(value)}
                className="ml-4"
                style={{
                  flex: 1,
                  paddingTop: 6,
                  fontSize: 16,
                  paddingRight: 6,
                  paddingBottom: 6,
                  paddingLeft: 0,
                }}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              className="py-3 px-3  max-w-1/3 rounded-xl"
              onPress={submitFields}
            >
              <Text
                className="text-xl py-3 px-3  font-bold rounded-xl text-center text-white"
                style={{ backgroundColor: themeColors.bg }}
              >
                Update Profile
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-7 mb-4">
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="font-semibold text-purple-500"> Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
