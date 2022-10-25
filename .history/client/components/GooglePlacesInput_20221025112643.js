import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={"default"}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: "grey",
        },
        textInput: {
          height: 38,
          color: "#5d5d5d",
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
    />
  );
};

export default GooglePlacesInput;
