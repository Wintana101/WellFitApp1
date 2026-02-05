import { StyleSheet, Text, View } from "react-native";

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress 📊</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Weekly Steps</Text>
        <Text style={styles.value}>3,500</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Workouts Completed</Text>
        <Text style={styles.value}>5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6B8E4E", padding: 20 },
  title: { fontSize: 24, color: "#fff", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#1F3D2B", padding: 16, borderRadius: 16, marginBottom: 12 },
  label: { color: "#BFD8C1" },
  value: { color: "#fff", fontSize: 20 }
});
