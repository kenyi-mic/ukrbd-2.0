import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const FormField = (props) => {
  return (
    <View ClassName="mx-3 p-2">
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
  lebel: {
    fontSize: 30,
  },
});
export default FormField;
