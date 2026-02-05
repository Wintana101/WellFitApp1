import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { registerUser } from "../controllers/authController";
import { auth } from "../services/firebaseConfig";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const success = await registerUser(email, password);
    if (success) {
      await updateProfile(auth.currentUser, {
        displayName: name
      });
      navigation.replace("MainTabs");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6B8E4E", padding: 20, justifyContent: "center" },
  title: { fontSize: 26, color: "#fff", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", borderRadius: 12, padding: 12, marginBottom: 10 },
  button: { backgroundColor: "#1F3D2B", padding: 14, borderRadius: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
