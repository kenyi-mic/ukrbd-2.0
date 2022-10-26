import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const FormField = (props) => {
  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.formFieldText}
        onChange={(event) =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        {...props.textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({ first });
export default FormField;
