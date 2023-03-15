import { createSlice } from "@reduxjs/toolkit/dist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profileImage: null,
    coverImage: null,
    name: "",
    email: "",
    phone: "",
    location: "",
  },

  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
      AsyncStorage.setItem("profileImage", action.payload);
    },
    setCoverImage: (state, action) => {
      state.coverImage = action.payload;
      AsyncStorage.setItem("coverImage", action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
      AsyncStorage.setItem("name", action.payload);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      AsyncStorage.setItem("email", action.payload);
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
      AsyncStorage.setItem("phone", action.payload);
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      AsyncStorage.setItem("location", action.payload);
    },
  },
});

export const {
  setProfileImage,
  setCoverImage,
  setName,
  setEmail,
  setLocation,
  setPhone,
} = userSlice.actions;

export default userSlice.reducer;
