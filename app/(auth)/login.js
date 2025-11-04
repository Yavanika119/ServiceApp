import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Ionicons name="close" size={26} color="black" />
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
            }}
            style={styles.topImage}
          />
        </View>

        <Text style={styles.title}>Login</Text>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.createText}>
            or <Text style={styles.createLink}>create an account</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.line} />

        {/* Input */}
        <TextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />

        {/* Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By clicking on Login, I accept the{" "}
          <Text style={styles.link}>Terms & Conditions</Text> &{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end", // ✅ Push content to RIGHT SIDE
    paddingRight: 20,
  },

  card: {
    width: 330, // ✅ Small screen/card size
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },

  createText: {
    fontSize: 15,
    marginTop: 5,
  },

  createLink: {
    color: "#FF5A00",
    fontWeight: "600",
  },

  line: {
    width: 40,
    height: 2,
    backgroundColor: "#000",
    marginVertical: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 10,
  },

  loginBtn: {
    backgroundColor: "#FF5A00",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  termsText: {
    marginTop: 15,
    fontSize: 12,
    color: "#555",
  },

  link: {
    color: "#FF5A00",
    fontWeight: "600",
  },
});
