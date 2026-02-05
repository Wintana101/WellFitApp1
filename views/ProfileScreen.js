import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../services/firebaseConfig";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile 👤</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{auth.currentUser?.displayName}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{auth.currentUser?.email}</Text>
      </View>

      <TouchableOpacity style={styles.logout} onPress={() => signOut(auth)}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6B8E4E", padding: 20 },
  title: { fontSize: 24, color: "#fff", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#1F3D2B", padding: 16, borderRadius: 16, marginBottom: 30 },
  label: { color: "#BFD8C1", marginTop: 6 },
  value: { color: "#fff", fontSize: 16 },
  logout: { backgroundColor: "#C94A4A", padding: 14, borderRadius: 12 },
  logoutText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
