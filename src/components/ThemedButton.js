import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedButton({ title, onPress }) {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.colors.primary }]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: "#FFF", fontFamily: theme.fonts.bold }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});
