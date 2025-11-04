import { useContext } from "react";
import { TextInput, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedInput({ placeholder, value, onChangeText }) {
  const theme = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: theme.colors.inputBg,
          color: theme.colors.text,
          fontFamily: theme.fonts.regular,
        },
      ]}
      placeholder={placeholder}
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});
