import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../services/firebaseConfig";

const STEP_GOAL = 8000;
const quotes = [
  "Small steps every day 🏃‍♂️",
  "Progress over perfection ✨",
  "You’re stronger than yesterday 💪",
  "Health is wealth 💚"
];

export default function HomeScreen() {
  const [steps, setSteps] = useState(0);
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState(quotes[0]);
  const [water, setWater] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const progress = Math.min(steps / STEP_GOAL, 1) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hey {auth.currentUser?.displayName} 👋</Text>
      <Text style={styles.quote}>{quote}</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Steps Today: {steps}</Text>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter steps"
          keyboardType="numeric"
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSteps(Number(input));
            setInput("");
          }}
        >
          <Text style={styles.buttonText}>Save Steps</Text>
        </TouchableOpacity>

        <Text style={styles.water}>Water: {water} / 8 💧</Text>
        <TouchableOpacity style={styles.waterButton} onPress={() => setWater(Math.min(water + 1, 8))}>
          <Text style={styles.buttonText}>Drink Water</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6B8E4E", padding: 20 },
  greeting: { fontSize: 22, color: "#fff", fontWeight: "bold" },
  quote: { color: "#EAF4EA", fontStyle: "italic", marginBottom: 10 },
  card: { backgroundColor: "#1F3D2B", padding: 16, borderRadius: 16 },
  text: { color: "#fff", marginBottom: 6 },
  progressBg: { height: 8, backgroundColor: "#ccc", borderRadius: 4, marginVertical: 8 },
  progressFill: { height: 8, backgroundColor: "#8ED081", borderRadius: 4 },
  input: { backgroundColor: "#fff", borderRadius: 10, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#6B8E4E", padding: 12, borderRadius: 10 },
  water: { color: "#fff", marginTop: 12 },
  waterButton: { backgroundColor: "#4AA3A2", padding: 10, borderRadius: 10, marginTop: 6 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
