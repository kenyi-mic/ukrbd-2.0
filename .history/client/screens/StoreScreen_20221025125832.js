import React, { Component, useEffect, useState } from "react";

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { Text } from "react-native";
import { View } from "react-native";

const StoreScreen = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  return (
    <View>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />

      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </View>
  );
};

export default StoreScreen;
