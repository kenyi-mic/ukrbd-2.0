import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const FormField = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.lebel}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        onChange={(event) =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        {...props.textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  lebel: {
    fontSize: 25,
    fontWeight: "semibold",
  },
});
export default FormField;
