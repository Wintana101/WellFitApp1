import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { loginUser } from "../controllers/authController";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await loginUser(email, password);

    if (success) {
      navigation.replace("MainTabs");
    } else {
      Alert.alert("Login Failed", "Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Well-Fit</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ddd"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ddd"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    padding: SIZES.padding,
  },
  title: {
    fontSize: 32,
    color: COLORS.card,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: COLORS.card,
    color: COLORS.white,
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.cardLight,
    padding: 15,
    borderRadius: SIZES.radius,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  link: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 20,
  },
});
