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

const StoreScreen =() => {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }
const [region, setRegion] = useState('');
const [country, setCountry] = useState('');


useEffect(()=>{
  setRegion(region);
  setCountry(country)
})
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {

    const { country, region } = this.state;
    return (
      <View>
        <Text>
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
          />
        </Text>
        <Text>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
          />
        </Text>
      </View>
    );
  }
}

export default StoreScreen;
