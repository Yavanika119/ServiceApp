import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* ✅ TOP SECTION */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>

          <Image
            source={{
              uri: "https://i.ibb.co/5T0HshV/roll.png",
            }}
            style={styles.iconImg}
          />
        </View>

        <Text style={styles.title}>Sign up</Text>

        {/* ✅ Login redirect */}
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.subTitle}>
            or <Text style={styles.loginBold}>login to your account</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.underline}></View>

        {/* ✅ INPUT FIELDS */}
        <TextInput
          placeholder="Phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        {/* ✅ Referral Link */}
        <TouchableOpacity>
          <Text style={styles.referral}>Have a referral code?</Text>
        </TouchableOpacity>

        {/* ✅ CONTINUE BUTTON */}
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>

        {/* ✅ Terms & Conditions */}
        <Text style={styles.terms}>
          By creating an account, I accept the{" "}
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
    alignItems: "flex-end", // ✅ right side
    paddingRight: 20,
  },

  card: {
    width: 330,
    padding: 25,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  close: {
    fontSize: 28,
    color: "#000",
  },

  iconImg: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 10,
  },

  subTitle: {
    marginTop: 4,
    color: "#777",
    fontSize: 14,
  },

  loginBold: {
    color: "#FF5A00",
    fontWeight: "600",
  },

  underline: {
    marginTop: 12,
    width: 40,
    height: 3,
    backgroundColor: "#000",
    borderRadius: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 18,
  },

  referral: {
    marginTop: 12,
    color: "#377DFF",
    fontWeight: "600",
    fontSize: 14,
  },

  continueBtn: {
    backgroundColor: "#FF5A00",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 22,
    alignItems: "center",
  },

  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  terms: {
    marginTop: 12,
    fontSize: 12,
    color: "#444",
  },

  link: {
    color: "#FF5A00",
    fontWeight: "700",
  },
});
