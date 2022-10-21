import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CameraIcon } from "react-native-heroicons/solid";

const AccountScreen = () => {
  return (
    <SafeAreaView className="flex-1 z-0">
      <ScrollView>
        {/* Cover image*/}
        <View className="z-0 mb-12 ">
          <Image
            className="w-full h-40"
            source={{
              uri: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Pressable className="absolute bottom-2 right-4">
            <CameraIcon color="white" size={30} />
          </Pressable>
          {/* peofile image*/}
          <TouchableOpacity className="absolute -bottom-12 z-10 ml-4 border-4 rounded-full border-white ">
            <Image
              className="w-24 h-24 rounded-full  "
              source={{
                uri: "https://lh3.googleusercontent.com/-wwP3e5T8JyldY2EvUsq4NjMfBP5_U4pjFjvR-V5l5YB54Ah6usAo4Oqz_kvjEvZt5brdh7QkEyIUR65Eg8EwmYSrbRZjG0R9fVyXgNuGmiEEKfEACc3TJj_6f2HzyxHYmnm-FG6NR-Ccm9wxJYBbC93voaHfBDBkQCesettdA9MSykH_ozUtFNBitO96G0-HfBedCKle8JzZM_ObGBK72IO4Zvc6cK_fuTzj4ta9SNGzqos5OPrbIZ5H80L7DIXhWbK16N7TimBjtNCuscNwB6ILbgCR6tlBUNPQLNLFp_lwY0wmoRjV_qsvcsQ4dtYmE1nhhSoWQVPXxdWdfyLtfeesZtsfwt_IPAfziN60_JOo2_AfPhBrgm-8DGA3V473wfRhC5B-ArtgBFD10Sq8KEzHQRCrkAzoVZxL7xXzXEcve1Zx-LhiejAfMfxJReBwX8s4lWfjb7Qvwc_KzZQppZJKn68t3uj3WyFRLLR9OlPynAwnlQWRplfn9M___9zQkwDAFURrobPvtlgy3Qvv8ldwuiYTVd1ylaqLYFRs_eEbLCMwkmMaNMGkN3igFUXQCXkb5_yU2mnYOjEjQhBiZ8iGAOuwTvii8xyEyYtoKjDQIcdlr4F7YbCYtNc3xLcB40VYE8VjDjJF0CT3CUseUZtfP24AK2aAuX1VgFV1ZplDj809KGWEDgC4xLur9W9V3sLO-MuDJRUbgpg2F8z1sTSIPm_vAzx90mBSl19vFlveTeVCE6XPdHggTRoTuFE-Ys-7jhFd50X_I2lKQmXmzNO2wALmmtEfxxuoVv0SRzg3MCUL9Q8dY1CGs3-yeYGHy9yKCHNFUC3yNlMhJrzU73lDejRV_kX3_v1UCHaEXbHy0BLuAI5ixx-NxHbHlIK4N-W0sQzJS7JUiE_zfBNOzSIYFOrjB7eVr2mac8=w610-h611-no?authuser=0",
              }}
            />
            <Pressable className="absolute bottom-1 shadow right-8 opacity-60">
              <CameraIcon color="white" size={30} />
            </Pressable>
          </TouchableOpacity>

          <Text className="text-xl absolute bottom-0">Michael Henry</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
