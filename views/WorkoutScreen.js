import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../services/firebaseConfig";

// Master workout pool
const WORKOUT_POOL = [
  { name: "Full Body 💪", minutes: 30 },
  { name: "Cardio 🏃‍♂️", minutes: 20 },
  { name: "Yoga 🧘", minutes: 25 },
  { name: "Core 🔥", minutes: 15 },
  { name: "HIIT ⚡", minutes: 18 },
  { name: "Stretching 🧎", minutes: 12 }
];

// Deterministic shuffle based on seed
const shuffleWithSeed = (array, seed) => {
  const result = [...array];
  let currentIndex = result.length;

  while (currentIndex !== 0) {
    seed = (seed * 9301 + 49297) % 233280;
    const randomIndex = Math.floor((seed / 233280) * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex]
    ];
  }

  return result;
};

export default function WorkoutScreen() {
  const userId = auth.currentUser?.uid || "guest";
  const today = new Date().toDateString();

  const workouts = useMemo(() => {
    const seed =
      userId.split("").reduce((a, c) => a + c.charCodeAt(0), 0) +
      today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

    return shuffleWithSeed(WORKOUT_POOL, seed).slice(0, 3);
  }, [userId, today]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today’s Workout 💥</Text>

      {workouts.map((w, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.name}>{w.name}</Text>
          <Text style={styles.minutes}>{w.minutes} minutes</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B8E4E",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center"
  },
  card: {
    backgroundColor: "#1F3D2B",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  minutes: {
    color: "#BFD8C1",
    marginTop: 4
  }
});
