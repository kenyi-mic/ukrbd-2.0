import React from "react";
import { View, Text, TextInput } from "react-native";

const FormField = (props) => {
  return (
    <View className="mx-4 my-2">
      <Text className="text-gray-400 text-2xl font-bold py-3 ">
        {props.label}
      </Text>
      <TextInput
        className=" p-2 text-lg border-2 border-gray-300"
        autoComplete={props.autoComplete}
        textContentType={props.textContent}
        placeholder={props.placeholder}
        onChange={(event) =>
          props.handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        {...props.textInputProps}
      />
    </View>
  );
};

export default FormField;
