import React from "react";
import { Text, View, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input } from "react-native-elements";
import { StyleSheet } from "react-native";

const GOOGLE_PLACES_API_KEY = "YOUR_GOOGLE_API_KEY";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      className="flex flex-row"
      query={{
        key: "AIzaSyBJ9rQcb3687-880GhkPOICi4rBanrENZs",
        language: "en", // language of the results
      }}
      onPress={(data, details) => console.log(data, details)}
      textInputProps={{
        placeholder: "location...",
        InputComp: Input,
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#FFFFFF",
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#c8c7cc",
    borderTopWidth: 0.5,
  },
  powered: {},
  listView: {},
  row: {
    backgroundColor: "#FFFFFF",
    padding: 13,
    height: 44,
    flexDirection: "row",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#c8c7cc",
  },
  description: {},
  loader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 20,
  },
});

export default GooglePlacesInput;
