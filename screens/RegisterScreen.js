import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const submitFields = async () => {
    if (username && email && password && confirm_password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(function (result) {
            return result.user.updateProfile({
              displayName: username,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.log("error : ", error);
      }
    } else {
      console.log("please , add your user informations correctlu");
    }
  };
  return (
    <View
      className="flex-1 bg-white justify-around"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex flex-col justify-center align-center space-y-6 mt-6 ">
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>

      <View className="max-w-1/2 max-h-1/2 bg-white border border-gray mb-20 mx-2 my-8 px-4 pt-4 rounded-3xl shadow-2xl shadow-gray-700">
        <View className="form space-y-4">
          <Text className="text-black text-2xl font-bold text-center m-2 p-2">
            Register
          </Text>
          <View className="max-w-1/2 m-4 p-4 font-main flex-row items-center rounded-xl bg-gray-100">
            <Icon className="p-2.5 mx-2" name="email" size={20} color="gray" />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
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

          <View className="max-w-1/2 m-4 p-2 font-main flex-row justify-center align-center rounded-xl bg-gray-100">
            <Icon className="p-2.5 mx-2" name="lock" size={20} color="gray" />
            <TextInput
              placeholder="Password"
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

          <View className="max-w-1/2 m-4 p-2 font-main flex-row justify-center align-center rounded-xl bg-gray-100">
            <Icon className="p-2.5 mx-2" name="lock" size={20} color="gray" />
            <TextInput
              placeholder="Confirm Password"
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
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-7 mb-4">
            <Text className="text-gray-500 font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-purple-500"> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
