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
      <Text>
        <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      </Text>
      <Text>
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </Text>
    </View>
  );
};

export default StoreScreen;
