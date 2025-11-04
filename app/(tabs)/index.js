import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import api from "../../src/api/axiosConfig";

export default function Home() {
  const router = useRouter();

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/restaurants");
      setRestaurants(response.data);
    } catch (error) {
      console.log("API Error:", error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>

      {/* ✅ Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.ibb.co/0j1m36J/logo-swiggy.png" }}
          style={styles.logo}
        />

        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Title */}
      <Text style={styles.title}>
        Order Food & Groceries. Discover the best restaurants.
      </Text>

      {/* ✅ Search Bar */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search for restaurant, item or more"
          placeholderTextColor="#636262ff"
          style={styles.searchInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* ✅ Horizontal Medium Category Cards */}
      <Text style={styles.sectionTitle}>Services</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <CategoryCard
          title="FOOD DELIVERY"
          subtitle="From Restaurants"
          img="https://i.ibb.co/cx7GZ9C/breakfast.png"
        />

        <CategoryCard
          title="INSTAMART"
          subtitle="Instant Grocery"
          img="https://i.ibb.co/hFbJ8pf/grocery.png"
        />

        <CategoryCard
          title="DINEOUT"
          subtitle="Eat Out & Save"
          img="https://i.ibb.co/RvJ7zrW/dine.png"
        />
      </ScrollView>

      {/* ✅ Restaurant List */}
      <Text style={styles.sectionTitle}>Popular Restaurants</Text>

      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        restaurants.map((item, index) => (
          <View key={index} style={styles.restaurantCard}>
            <Image source={{ uri: item.image }} style={styles.restaurantImg} />
            <View>
              <Text style={styles.restaurantTitle}>{item.name}</Text>
              <Text style={styles.restaurantInfo}>{item.category}</Text>
              <Text style={styles.restaurantTime}>{item.time} mins</Text>
            </View>
          </View>
        ))
      )}

    </ScrollView>
  );
}

// ✅ Category Card Component
const CategoryCard = ({ title, subtitle, img }) => (
  <TouchableOpacity style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSub}>{subtitle}</Text>
    <Image source={{ uri: img }} style={styles.cardImg} />
    <Text style={styles.arrow}>➡️</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF6B00",
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: { width: 120, height: 40, resizeMode: "contain" },

  signInBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#000",
    borderRadius: 30,
  },

  signInText: { color: "#fff", fontWeight: "700" },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    marginTop: 20,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  searchInput: { flex: 1, padding: 12, fontSize: 16 },
  searchIcon: { fontSize: 20 },

  /* ✅ Horizontal Medium Cards */
  card: {
    backgroundColor: "#fff",
    width: 220,
    marginRight: 15,
    padding: 15,
    borderRadius: 20,
  },

  cardTitle: { fontSize: 18, fontWeight: "800" },
  cardSub: { color: "#777", marginBottom: 10 },

  cardImg: { width: "100%", height: 120, borderRadius: 15 },

  arrow: { fontSize: 22, textAlign: "right", marginTop: 8 },

  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 25,
    marginBottom: 10,
  },

  restaurantCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 20,
  },

  restaurantImg: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 12,
  },
  restaurantTitle: { fontSize: 18, fontWeight: "700" },
  restaurantInfo: { color: "#777" },
  restaurantTime: { marginTop: 5, fontWeight: "600" },

  loading: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
  },
});

