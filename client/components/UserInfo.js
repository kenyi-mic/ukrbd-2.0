import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";

const UserInfo = ({ id, username, email, onPress }) => {
  const signOut = () => {
    Auth.signOut();
  };

  const data = useSelector((state) => state.user);

  const profile = data.profileImage;

  return (
    <View>
      <View className="flex flex-row justify-between mx-4">
        <View className="flex flex-row space-x-2">
          <Text className="text-xl font-light">Hello,</Text>
          <Pressable onPress={signOut}>
            <Text className="text-xl font-bold">{username}</Text>
          </Pressable>
        </View>

        <TouchableOpacity onPress={onPress}>
          {profile === null ? (
            <Image
              className="w-10 h-10 rounded-full bg-white p-2 border"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
              }}
            />
          ) : (
            <View>
              {profile.map((item, index) => (
                <Image
                  key={index}
                  className="w-10 h-10 rounded-full bg-white p-2 border"
                  source={{
                    uri: item.uri,
                  }}
                />
              ))}
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text className="text-sm mx-4 text-blue-600 ">{email}</Text>
    </View>
  );
};

export default UserInfo;
